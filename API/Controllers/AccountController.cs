using API.Data;
using API.Dto;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly DataContext dataContext;

        public AccountController(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        [HttpPost("register")]
        public async Task<ActionResult<User>> Register(RegisterDto registerDto)
        {
            if (await UserExists(registerDto.Username))
                return BadRequest("Username is taken");

            using var hmac = new HMACSHA512();

            var user = new User
            {
                Username = registerDto.Username.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
                PasswordSalt = hmac.Key,
            };

            dataContext.Users.Add(user);

            await dataContext.SaveChangesAsync();

            return user;
        }

        [HttpPost("login")]
        public async Task<ActionResult<User>> Login(LoginDto loginDto)
        {
            var user = await dataContext.Users.SingleOrDefaultAsync(user => user.Username == loginDto.Username);

            if (user == null)
                return Unauthorized("Invalid username");

            using var hmac = new HMACSHA512(user.PasswordSalt);

            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

            // ToDo: Add bytes array operations helper class
            if (!computedHash.SequenceEqual(user.PasswordHash))
                return Unauthorized("Invalid password");

            return user;
        }

        
        private async Task<bool> UserExists(string username)
        {
            return await dataContext.Users.AnyAsync(user => user.Username == username.ToLower());
        }
    }
}
