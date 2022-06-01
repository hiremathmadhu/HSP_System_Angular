using HomeServiceProvider.Models;
using System.Collections.Generic;
using System.Linq;
using System;

namespace HomeServiceProvider.Repositories
{
    public class CustomerRepository
    {
        private readonly HSP_DATABASEContext context;
        public CustomerRepository()
        {
            context = new HSP_DATABASEContext();
        }
        public void AddCustomer(Customer cust)
        {
            context.Customers.Add(cust);
            context.SaveChanges();
        }
        public List<Customer> GetCustomers()
        {
            var temp = context.Customers.ToList();
            return context.Customers.ToList(); //return list of customers
        }
        public Customer GetCustomer(int id) //get customer details using customerid
        {
            Customer cust = context.Customers.Find(id);
            return cust;
        }
        public void EditCustomer(Customer cust) //edit row
        {
            context.Customers.Update(cust);
            context.SaveChanges();
        }
        public void DeleteCustomer(int id) //Delete customer row
        {
            Customer cust = context.Customers.Find(id);
            context.Customers.Remove(cust);
            context.SaveChanges();
          
        }
    }
}
