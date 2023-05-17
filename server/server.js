const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { Pool } = require("pg");
const express = require("express");
const bodyparser = require('body-parser');
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(bodyparser.json());


app.get('/', (req, res) => {
  res.send('hello world');
})

app.get('/employee', async (req, res) => {
    const employees = await prisma.Employee.findMany();
 
      // where: { Published: true }
      // include: { register: true }
   
    // })
    res.send(employees)
    // res.json({
    //     success:true,
    //     playload:employees,
        
    // });
  })

app.post('/create', async (req, res) => {
  const values = {
    pepoleHubId,
    employeeCode,
    employeeName,
    phoneNumber,
    EmailID,
    PersonalPhoneNumber,
    PersonalEmailID,
    Designation,
    JoiningDate,
    Manager,
    HRBP,
    Unit,
    Function,
    SubFunction,
    EmplymentType,
    Grade,
    Location
  } = req.body
  const PostgreSQL = "INSERT INTO Employee  (pepoleHubId,employeeCode,employeeName,phoneNumber,EmailID,PersonalPhoneNumber,PersonalEmailID,Designation,JoiningDate,Manager,HRBP,Unit,Function,SubFunction,EmplymentType,Grade, Location) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)";

  try {
    console.log(req.body);
    const employee = await prisma.Employee.create({
      data: req.body,
      data: req.body,


      data: req.body,


    })
    console.log('creating successfully');
    res.status(200).json(employee)
  }
  catch (err) {
    console.log(err)
    res.status(500).send('error creating employee')

  }
})


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Mydb',
  password: 'Chandra@123',
  port: '5432'
});
pool.connect()

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error('Error executing query', err);
  } else {
    console.log('Connected to PostgreSQL database at', res.rows[0].now);
  }
});

app.put('/Employeeupdate/:id', async (req, res) => {
  //   const PostgreSQL="UPDATE Employee SET `pepoleHubId`=?,`employeeCode`=?, `employeeName`=?, `phoneNumber`=?, `Email ID`=?, `PersonalPhoneNumber`=?, `PersonalEmailID`=?, `Designation`=?, `JoiningDate`=?, `Manager`=?, `HRBP`=?, `Unit`=?, `Function`=?, `SubFunction`=?, `EmplymentType`=?, `Grade`=?, `Location`=? WHERE ID=?";
  const employeeID = req.params.id;
  const employeeData = {
    pepoleHubId,
    employeeCode,
    employeeName,
    phoneNumber,
    EmailID,
    PersonalPhoneNumber,
    PersonalEmailID,
    Designation,
    JoiningDate,
    Manager,
    HRBP,
    Unit,
    Function,
    SubFunction,
    EmplymentType,
    Grade,
    Location
  } = req.body;

  const updatedEmployee = await prisma.Employee.update({
    where: {
      id: employeeID,
    },
    data: req.body,
  });
  res.send({
    data: updatedEmployee,
    message: "edit employeedata success"
  })
});

app.patch("/Employeepatch/:id", async (req, res) => {
  const employeeID = req.params.id;
  const employeeData = {
    pepoleHubId,
    employeeCode,
    employeeName,
    phoneNumber,
    EmailID,
    PersonalPhoneNumber,
    PersonalEmailID,
    Designation,
    JoiningDate,
    Manager,
    HRBP,
    Unit,
    Function,
    SubFunction,
    EmplymentType,
    Grade,
    Location
  } = req.body;
  const updatedEmployee = await prisma.Employee.update({
    where: {
      id: employeeID,
    },
    data: req.body,
  });
  res.send({
    data: updatedEmployee,
    message: "edit employeedata success"
  })
});

app.get("employeeRead/:id", async (req, res) => {
  const EmployeeId = req.params.id;

  const employeereadData = await prisma.Employee.findUnique({
    where: {
      id: EmployeeId
    },
  });
  if (!employeereadData) {
    return res.status(405).send("employee not found");
  }

  res.send("employee get")
})




app.delete('/delete/:id', async (req, res) => {

  const employeeID = req.params.id;
  await prisma.Employee.delete({
    where: {
      id: employeeID,
    }
  });

  res.send("EMPLOYEE DELETED")

});



app.listen(5000,
  () => {
    console.log(`Server Started on port 5000`);
  });

