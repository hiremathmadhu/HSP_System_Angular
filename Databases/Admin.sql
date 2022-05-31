create table Admin
(
admin_username varchar(50) primary key,
admin_password varchar(50),
admin_area varchar(50),
admin_city varchar(50),
admin_pincode int);

insert into Admin values('Aradhya','mnh87','Bcolony','Mandya',528525)
insert into Admin values('Aradhyan','mnnh87','KBcolony','Mandya',528525)

select * from Admin