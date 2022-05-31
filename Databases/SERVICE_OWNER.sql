CREATE TABLE SERVICE_OWNER
(
Id INT PRIMARY KEY,
serviceownername VARCHAR (50) NOT NULL,
Enterprisesname varchar(255) not null ,
ownercontact varchar(20) not null, 
address varchar(225) not null,
);

insert into SERVICE_OWNER values(1,'Aadhya','DMart','9876543215','KRPURAM');
insert into SERVICE_OWNER values(2,'Aaditi','Trendz','636256959','Yelhanka');
insert into SERVICE_OWNER values(3,'Aradhya','Reliance','6363654692','Yeswantpur');

select * from SERVICE_OWNER