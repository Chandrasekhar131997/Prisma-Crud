import axios from 'axios';
import React,{useEffect,useState} from 'react';
import {useParams} from "react-router-dom";
import {CardWrapper,
  CardHeader,
  CardSubHeading,
  CardBody,
  Gettable,
  Gettablehead,
  Gettr,
  Getth,
  Gettablebody,
  Gettd,
  TableButton
  
} from '../Style/Dashboard.style';




function ReadDetails() {
    const {id} =useParams();
    // const[value,setValue] =useState([])
    const [employee,setEmployee] =useState([])
    useEffect(()=> {
      // const fetchData =async ()=>{
        axios.get('http://localhost:5000/read/'+id)
         
        .then(res =>{
          // console.log(res)
          setEmployee(res.data);
        })
          .catch(err => console.log(err))
      // };
      //   fetchData();
        },[id]);

  return (
    <CardWrapper>
     <CardBody> 
     <CardHeader>
      <CardSubHeading>Basic Information</CardSubHeading>
      </CardHeader>
      <Gettable>
      <Gettablehead>
        <Gettr>
          <Getth>PeopleHub ID</Getth>
          <Getth>Employee Code</Getth>
          <Getth>Employee Name</Getth>
          <Getth>Phone Number</Getth>
          <Getth>Email ID</Getth>
          <Getth>Personal Phone Number</Getth>
          <Getth>Personal Email ID</Getth>
          <Getth>Action</Getth>
        </Gettr>
      </Gettablehead>
      <Gettablebody>
      
      <Gettr>
           <Gettd>{employee.pepoleHubId}</Gettd>
           <Gettd>{employee.employeeCode}</Gettd>
           <Gettd>{employee.employeeName}</Gettd>
           <Gettd>{employee.phoneNumber}</Gettd>
           <Gettd>{employee.EmailID}</Gettd>
           <Gettd>{employee.PersonalPhoneNumber}</Gettd>
           <Gettd>{employee.PersonalEmailID}</Gettd>
           <Gettd>
            {/* <ButtonCollection> */}
            {/* <CardButton type='submit'><Link to={`/update/${employee.EmailID}`}>Edit</Link></CardButton>
            <CardButton type='submit' onClick={()=> DeleteClick(employee.EmailID)}>Delete</CardButton> */}
            {/* </ButtonCollection> */}
           </Gettd>
      </Gettr>   

</Gettablebody>
</Gettable>

       <CardHeader>
      <CardSubHeading>Work Information</CardSubHeading>
      </CardHeader>
      <Gettable>
      <Gettablehead>
        <Gettr>
          <Getth>Designation</Getth>
          <Getth>Joining Date</Getth>
          <Getth>Manager</Getth>
          <Getth>HRBP</Getth>
          <Getth>Unit</Getth>
          <Getth>Function</Getth>
          <Getth>Sub Function</Getth>
          <Getth>Emplyment Type</Getth>
          <Getth>Grade</Getth>
          <Getth>Location</Getth>
        </Gettr>
      </Gettablehead>
      <Gettablebody>
      
      <Gettr>
           <Gettd>{employee.Designation}</Gettd>
           <Gettd>{employee.JoiningDate}</Gettd>
           <Gettd>{employee.Manager}</Gettd>
           <Gettd>{employee.HRBP}</Gettd>
           <Gettd>{employee.Unit}</Gettd>
           <Gettd>{employee.Function}</Gettd>
           <Gettd>{employee.SubFunction}</Gettd>
           <Gettd>{employee.EmplymentType}</Gettd>
           <Gettd>{employee.Grade}</Gettd>
           <Gettd>{employee.Location}</Gettd>
  
      </Gettr>  


</Gettablebody>
</Gettable>    
    </CardBody> 
    <TableButton type='submit'>Back</TableButton>
    <TableButton type='submit'>Edit</TableButton>
  </CardWrapper>
  )
}

export default ReadDetails
