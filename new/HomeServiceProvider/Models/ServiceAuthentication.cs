using System;
using System.Collections.Generic;

#nullable disable

namespace HomeServiceProvider.Models
{
    public partial class ServiceAuthentication
    {
        public int serviceid { get; set; }
        public string ServiceauthUsername { get; set; }
        public string ServiceauthLogin { get; set; }
        public string ServiceauthPassword { get; set; }
        public string ServiceauthForgotpassword { get; set; }
        public string ServiceauthResetpassword { get; set; }
    }
}
