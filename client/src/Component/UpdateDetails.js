import React, {useEffect,useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom'
import {
  CardWrapper,
  CardHeading,
  CardHeader,
  CardSubHeading,
  Detailheading,
  CardBody,
  CardFieldset,
  TableButton,
  Getform,
  InputData1,
  ButtonCollection


} from '../Style/Dashboard.style';

export default function UpdateDetails() {
  const { id } = useParams();
  // const [employee,setEmployee] =useState([]);
  

  const [values, setValues] = useState({
    pepoleHubId: "",
    employeeCode: "",
    employeeName: "",
    phoneNumber: "",
    EmailID: "",
    PersonalPhoneNumber: "",
    PersonalEmailID: "",
    Designation: "",
    JoiningDate: new Date(),
    Manager: "",
    HRBP: "",
    Unit: "",
    Function: "",
    SubFunction: "",
    EmplymentType: "",
    Grade: "",
    Location: ""
  });

  useEffect(()=>{
  
    axios.get(`http://localhost:5000/employeeRead/${id}`)

          .then(res =>{
            console.log(res)
            const employeeData = res.data[0];
            setValues({
              ...values,
              pepoleHubId: employeeData.pepoleHubId,
              employeeCode: employeeData.employeeCode,
              employeeName: employeeData.employeeName,
              phoneNumber: employeeData.phoneNumber,
              EmailID: employeeData.EmailID,
              PersonalPhoneNumber: employeeData.PersonalPhoneNumber,
              PersonalEmailID: employeeData.PersonalEmailID,
              Designation: employeeData.Designation,
              JoiningDate: employeeData.JoiningDate,
              Manager: employeeData.Manager,
              HRBP: employeeData.HRBP,
              Unit: employeeData.Unit,
              Function: employeeData.Function,
              SubFunction: employeeData.SubFunction,
              EmplymentType: employeeData.EmplymentType,
              Grade: employeeData.Grade,
              Location: employeeData.Location,
            });
            })
  
            .catch(err => console.log(err))

  }, [id,values])


  const navigate = useNavigate();
  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:5000/Employeeupdate/${id}`, values)
      .then(res => {
       setValues(res)
        navigate('/')
      })
      .catch(err => console.log(err));
  }


  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };


  return (
    <CardWrapper>
      <CardHeading>Employee Details Update</CardHeading>

      <Getform onSubmit={handleUpdate}>
        <CardBody>
          <CardHeader>
            <CardSubHeading>Basic Information</CardSubHeading>
          </CardHeader>

          <CardFieldset>

            <Detailheading htmlFor="pepolehubid">PepoleHub ID
              <InputData1
                type="text"
                name='pepoleHubId'
                value={values.pepoleHubId}
                onChange={handleChange}
              />
            </Detailheading>
            <Detailheading htmlFor="employeeCode">Employee Code
              <InputData1
                type="text"
                name='employeeCode'
                value={values.employeeCode}
                onChange={handleChange}
              />
            </Detailheading>
            <Detailheading htmlFor="employeeName">Employee Name
              <InputData1
                type="text"
                name='employeeName'
                value={values.employeeName}
                onChange={handleChange}
              />
            </Detailheading>
            <Detailheading htmlFor="phoneNumber">Phone Number
              <InputData1
                type="text"
                name='phoneNumber'
                value={values.phoneNumber}
                onChange={handleChange}
              />
            </Detailheading>
            <Detailheading htmlFor="EmailID">Email ID
              <InputData1
                type="text"
                name='EmailID'
                value={values.EmailID}
                onChange={handleChange}
              />
            </Detailheading>
            <Detailheading htmlFor="PersonalPhoneNumber">Personal Phone Number
              <InputData1
                type="text"
                name='PersonalPhoneNumber'
                value={values.PersonalPhoneNumber}
                onChange={handleChange}
              />
            </Detailheading>
            <Detailheading htmlFor="PersonalEmailID">Personal Email ID
              <InputData1
                type="text"
                name='PersonalEmailID'
                value={values.PersonalEmailID}
                onChange={handleChange}
              />
            </Detailheading>

          </CardFieldset>



          <CardHeader>
            <CardSubHeading>Work Information</CardSubHeading>
          </CardHeader>

          <CardFieldset>

            <Detailheading htmlFor="Designation">Designation
              <InputData1
                type="text"
                name='Designation'
                value={values.Designation}
                onChange={handleChange}
              />
            </Detailheading>
            <Detailheading htmlFor="JoiningDate">Joining Date
              <InputData1
                type="text"
                name='JoiningDate'
                value={values.JoiningDate}
                onChange={handleChange}
              />
            </Detailheading>
            <Detailheading htmlFor="Manager">Manager
              <InputData1
                type="text"
                name='Manager'
                value={values.Manager}
                onChange={handleChange}
              />
            </Detailheading>
            <Detailheading htmlFor="HRBP">HRBP
              <InputData1
                type="text"
                name='HRBP'
                value={values.HRBP}
                onChange={handleChange}
              />
            </Detailheading>
            <Detailheading htmlFor="Unit">Unit
              <InputData1
                type="text"
                name='Unit'
                value={values.Unit}
                onChange={handleChange}
              />
            </Detailheading>
            <Detailheading htmlFor="Function">Function
              <InputData1
                type="text"
                name='Function'
                value={values.Function}
                onChange={handleChange}
              />
            </Detailheading>
            <Detailheading htmlFor="SubFunction">Sub Function
              <InputData1
                type="text"
                name='SubFunction'
                value={values.SubFunction}
                onChange={handleChange}
              />
            </Detailheading>
            <Detailheading htmlFor="EmplymentType">Employee Type
              <InputData1
                type="text"
                name='EmplymentType'
                value={values.EmplymentType}
                onChange={handleChange}
              />
            </Detailheading>
            <Detailheading htmlFor="Grade">Grade
              <InputData1
                type="text"
                name='Grade'
                value={values.Grade}
                onChange={handleChange}
              />
            </Detailheading>
            <Detailheading htmlFor="Location">Location
              <InputData1
                type="text"
                name='Location'
                value={values.Location}
                onChange={handleChange}
              />
            </Detailheading>
          </CardFieldset>

          <ButtonCollection>
            <TableButton type='button'> <Link to="/" >Back</Link></TableButton>
            <TableButton type='submit'>Update</TableButton>
          </ButtonCollection>
        </CardBody>


      </Getform>



    </CardWrapper>
  )

}
