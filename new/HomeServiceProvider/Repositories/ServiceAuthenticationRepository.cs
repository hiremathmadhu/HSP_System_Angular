using HomeServiceProvider.Models;
using System.Collections.Generic;
using System.Linq;

namespace HomeServiceProvider.Repositories
{
    public class ServiceAuthenticationRepository
    {
        private readonly HSP_DATABASEContext context;
        public ServiceAuthenticationRepository()
        {
            context = new HSP_DATABASEContext();
        }
        public void AddServiceAuthentication(ServiceAuthentication serva)
        {
            context.ServiceAuthentications.Add(serva);
            context.SaveChanges();
        }
        public List<ServiceAuthentication> GetServiceAuthentication()
        {
            return context.ServiceAuthentications.ToList(); //return list of customers
        }
        public ServiceAuthentication GetServiceAuthentication(string name) //get customer details using customerid
        {
           
            ServiceAuthentication serva = new ServiceAuthentication();
            serva = context.ServiceAuthentications.ToList().FirstOrDefault(x=>x.ServiceauthUsername.Equals(name));
            return serva;
        }
        public void EditServiceAuthentication(ServiceAuthentication serva) //edit row
        {
            context.ServiceAuthentications.Update(serva);
            context.SaveChanges();
        }
        public void DeleteServiceAuthentication(int id) //Delete customer row
        {
            ServiceAuthentication serva = context.ServiceAuthentications.Find(id);
            context.ServiceAuthentications.Remove(serva);
            context.SaveChanges();

        }
    }
}
