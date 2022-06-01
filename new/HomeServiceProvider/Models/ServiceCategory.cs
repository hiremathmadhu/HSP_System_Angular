using System;
using System.Collections.Generic;

#nullable disable

namespace HomeServiceProvider.Models
{
    public partial class ServiceCategory
    {
        public int Serviceid { get; set; }
        public string Servicemail { get; set; }
        public string Servicetype { get; set; }
        public string Servicecontactnum { get; set; }
        public string ServiceAddress { get; set; }
    }
}
