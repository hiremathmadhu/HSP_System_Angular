using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System;
using System.Threading.Tasks;
using HomeServiceProvider.Repositories;
using HomeServiceProvider.Controllers;
using HomeServiceProvider.Models;

namespace HomeServiceProvider.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private CustomerRepository CustomerRepository;
        public CustomerController()
        {
            CustomerRepository = new CustomerRepository();
        }
        [HttpGet, Route("GetAllCustomers")]
        public IActionResult Getall()
        {
            return StatusCode(200, CustomerRepository.GetCustomers());
        }
        [HttpGet, Route("GetCustomerById/{id}")]
        public IActionResult Get(int id)
        {
            return StatusCode(200, CustomerRepository.GetCustomer(id));
        }
        //[HttpGet , Route("GetCustomerByName/{name}")]
        //public IActionResult Get(string name)
        //{
        //    return StatusCode(200, CustomerRepository.GetCustomer(name));
        //}
        [HttpPost, Route("AddCustomer")]//adding customer details
        public IActionResult Add(Customer cust)// Customer is your  model name and cust is parameter which we are passing
        {
            CustomerRepository.AddCustomer(cust);
            return StatusCode(200, "record added");
        }
        [HttpPut,Route("CustomerAddress")] //updating the details r record
        public IActionResult Get(Customer cust)
        {
            CustomerRepository.AddCustomer(cust);
            return StatusCode(200, "record modified");
        }
        [HttpDelete, Route("DeleteCustomer")]//deleting the record
        public IActionResult Delete(int id)
        {
            CustomerRepository.DeleteCustomer(id);
            return StatusCode(200, "record deleted");
        }

    }
}
// just copy paste entire code into another controller and change those model and paramter names thats it. u'll get it.