// import React from 'react';
// import { formSchema } from 'form/formSchema';
// import useCustomFormik from 'form';
// import Input from 'components/common/atoms/input';
// import Dropdown from 'components/common/atoms/dropdown';
// import Button from 'components/common/atoms/button';
// import StudentContainer from 'components/layout/student-container';

// const validationSchema = {
//   courseTitle: formSchema.text,
//   proposedStartDate: formSchema.date,
//   fullTime: formSchema.boolean,
//   proposedYearLevel: formSchema.text,
//   title: formSchema.text,
//   gender: formSchema.text,
//   dateOfBirth: formSchema.date,
//   firstName: formSchema.text,
//   surname: formSchema.text,
//   permanentAddress: formSchema.text,
//   country: formSchema.text,
//   postcode: formSchema.text,
//   mobile: formSchema.text,
//   email: formSchema.email,
//   nationality: formSchema.text,
//   professionalBodyName: formSchema.text,
//   professionalBodyRegNo: formSchema.text,
//   previousStudyUK: formSchema.boolean,
//   previousStudyLevel: formSchema.text,
//   previousStudyLCPS: formSchema.boolean,
//   highestQualification: formSchema.text,
//   qualifications: formSchema.array,
//   workExperience: formSchema.array,
//   agentUsed: formSchema.boolean,
//   agentName: formSchema.text,
//   agentEmail: formSchema.email,
//   referee1Name: formSchema.text,
//   referee1Address: formSchema.text,
//   referee1Postcode: formSchema.text,
//   referee1Telephone: formSchema.text,
//   referee1Email: formSchema.email,
//   supportingStatement: formSchema.text,
//   disability: formSchema.text,
//   declaration: formSchema.boolean,
//   applicantName: formSchema.text,
//   date: formSchema.date,
// };

// const initialValues = {
//   courseTitle: '',
//   proposedStartDate: '',
//   fullTime: true,
//   proposedYearLevel: '',
//   title: '',
//   gender: '',
//   dateOfBirth: '',
//   firstName: '',
//   maidenName: '',
//   surname: '',
//   permanentAddress: '',
//   country: '',
//   postcode: '',
//   correspondenceAddress: '',
//   correspondenceCountry: '',
//   correspondencePostcode: '',
//   daytimeTelephone: '',
//   eveningTelephone: '',
//   mobile: '',
//   email: '',
//   nationality: '',
//   arrivalDateUK: '',
//   permanentResidenceArea: '',
//   professionalBodyName: '',
//   professionalBodyRegNo: '',
//   previousStudyUK: false,
//   previousStudyLevel: '',
//   previousStudyLCPS: false,
//   highestQualification: '',
//   qualifications: '',
//   workExperience: '',
//   agentUsed: false,
//   agentName: '',
//   agentEmail: '',
//   referee1Name: '',
//   referee1Address: '',
//   referee1Postcode: '',
//   referee1Telephone: '',
//   referee1Email: '',
//   supportingStatement: '',
//   disability: '',
//   declaration: false,
//   applicantName: '',
//   date: '',
// };

// const onSubmit = (values) => {
//   console.log(values);
// }

// const StudentForm = () => {
//   const form = useCustomFormik({ onSubmit, validationSchema, initialValues });

//   return (
//     <StudentContainer>
//       <form onSubmit={form.handleSubmit} className='max-w-screen-md mx-auto flex flex-col gap-4 py-[2rem]'>
//         {/* <h1>London College of Professional Studies</h1>
//         <p>
//           68 Totteridge Road, Enfield, Middlesex, EN3 6NE<br />
//           <strong>Tel: 0203 995 8390 Email: admissions@lcpsltd.co.uk</strong><br />
//           <strong>Website: www.lcps.co.uk</strong>
//         </p> */}

//         <h2 className='text-center text-[2.5rem]'>Application Form for Admission to a Degree Programme</h2>

//         <h3 className='text-[1.65rem]'>Course Details</h3>
//         <Input form={form} name={"courseTitle"} placeholder="Enter Course Title" label={'Course Title'} />
//         <Input form={form} name={"proposedStartDate"} type="date" placeholder="Enter Proposed Start Date" label={'Proposed Start Date'} />
//         <Dropdown
//           onChange={(value) => {
//             form.setFieldValue("fullTime", value.value)
//           }}
//           value={[{ value: true, label: 'Full-time' }, { value: false, label: 'Part-time' }].find(item => item.value === form.values.fullTime)}
//           placeholder={"Select Full-time/Part-time"}
//           title={"Full-time/Part-time"}
//           name={"fullTime"}
//           options={[{ value: true, label: 'Full-time' }, { value: false, label: 'Part-time' }]}
//         />
//         <Input form={form} name={"proposedYearLevel"} placeholder="Enter Proposed Year/Level of Entry" label={'Proposed Year/Level of Entry'} />

//         <h3 className='text-[1.65rem]'>Personal Details</h3>
//         <Input form={form} name={"title"} placeholder="Enter Title" label={'Title'} />
//         <Dropdown
//           onChange={(value) => {
//             form.setFieldValue("gender", value.value)
//           }}
//           value={[{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }, { value: 'other', label: 'Other' }].find(item => item.value === form.values.gender)}
//           placeholder={"Select Gender"}
//           title={"Gender"}
//           name={"gender"}
//           options={[{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }, { value: 'other', label: 'Other' }]}
//         />
//         <Input form={form} name={"dateOfBirth"} type="date" placeholder="Enter Date of Birth" label={'Date of Birth'} />
//         <Input form={form} name={"firstName"} placeholder="Enter First Name(s)" label={'First Name(s)'} />
//         <Input form={form} name={"maidenName"} placeholder="Enter Maiden or Other Name(s)" label={'Maiden or Other Name(s)'} />
//         <Input form={form} name={"surname"} placeholder="Enter Surname/Family Name" label={'Surname/Family Name'} />
//         <Input form={form} name={"permanentAddress"} placeholder="Enter Permanent Address" label={'Permanent Address'} />
//         <Input form={form} name={"country"} placeholder="Enter Country" label={'Country'} />
//         <Input form={form} name={"postcode"} placeholder="Enter Postcode" label={'Postcode'} />
//         <Input form={form} name={"correspondenceAddress"} placeholder="Enter Correspondence Address" label={'Correspondence Address'} />
//         <Input form={form} name={"correspondenceCountry"} placeholder="Enter Correspondence Country" label={'Correspondence Country'} />
//         <Input form={form} name={"correspondencePostcode"} placeholder="Enter Correspondence Postcode" label={'Correspondence Postcode'} />
//         <Input form={form} name={"daytimeTelephone"} placeholder="Enter Daytime Telephone" label={'Daytime Telephone'} />
//         <Input form={form} name={"eveningTelephone"} placeholder="Enter Evening Telephone" label={'Evening Telephone'} />
//         <Input form={form} name={"mobile"} placeholder="Enter Mobile" label={'Mobile'} />
//         <Input form={form} name={"email"} type="email" placeholder="Enter Email Address" label={'Email Address'} />
//         <Input form={form} name={"nationality"} placeholder="Enter Nationality" label={'Nationality'} />
//         <Input form={form} name={"arrivalDateUK"} type="date" placeholder="Enter Date of Arrival in UK (if not born in the UK)" label={'Date of Arrival in UK (if not born in the UK)'} />
//         <Input form={form} name={"permanentResidenceArea"} placeholder="Enter Area of Permanent Residence" label={'Area of Permanent Residence'} />

//         <h3 className='text-[1.65rem]'>Professional Body Membership</h3>
//         <Input form={form} name={"professionalBodyName"} placeholder="Enter Professional Body Name" label={'Professional Body Name'} />
//         <Input form={form} name={"professionalBodyRegNo"} placeholder="Enter Professional Body Registration Number" label={'Professional Body Registration Number'} />

//         <h3 className='text-[1.65rem]'>Previous Study</h3>
//         <Dropdown
//           onChange={(value) => {
//             form.setFieldValue("previousStudyUK", value.value === 'yes')
//           }}
//           value={[
//             { value: 'yes', label: 'Yes' },
//             { value: 'no', label: 'No' },
//           ].find(item => item.value === (form.values.previousStudyUK ? 'yes' : 'no'))}
//           placeholder={"Have you previously studied in the UK?"}
//           title={"Have you previously studied in the UK?"}
//           name={"previousStudyUK"}
//           options={[
//             { value: 'yes', label: 'Yes' },
//             { value: 'no', label: 'No' },
//           ]}
//         />
//         <Input form={form} name={"previousStudyLevel"} placeholder="Enter Level" label={'If yes, at what level?'} />

//         <Dropdown
//           onChange={(value) => {
//             form.setFieldValue("previousStudyLCPS", value.value === 'yes')
//           }}
//           value={[
//             { value: 'yes', label: 'Yes' },
//             { value: 'no', label: 'No' },
//           ].find(item => item.value === (form.values.previousStudyLCPS ? 'yes' : 'no'))}
//           placeholder={"Have you previously studied at LCPS?"}
//           title={"Have you previously studied at LCPS?"}
//           name={"previousStudyLCPS"}
//           options={[
//             { value: 'yes', label: 'Yes' },
//             { value: 'no', label: 'No' },
//           ]}
//         />
//         <Input form={form} name={"highestQualification"} placeholder="Enter Highest Level of Qualification" label={'Highest Level of Qualification'} />
//         <Input form={form} name={"qualifications"} as="textarea" placeholder="Enter Qualifications (including those pending)" label={'Qualifications (including those pending)'} />

//         <h3 className='text-[1.65rem]'>Work Experience</h3>
//         <Input form={form} name={"workExperience"} as="textarea" placeholder="Enter Work Experience" label={'Work Experience'} />

//         <h3 className='text-[1.65rem]'>Use of Agent</h3>
//         <Dropdown
//           onChange={(value) => {
//             form.setFieldValue("agentUsed", value.value === 'yes')
//           }}
//           value={[
//             { value: 'yes', label: 'Yes' },
//             { value: 'no', label: 'No' },
//           ].find(item => item.value === (form.values.agentUsed ? 'yes' : 'no'))}
//           placeholder={"Do you intend to use an agent during the application process?"}
//           title={"Do you intend to use an agent during the application process?"}
//           name={"agentUsed"}
//           options={[
//             { value: 'yes', label: 'Yes' },
//             { value: 'no', label: 'No' },
//           ]}
//         />
//         <Input form={form} name={"agentName"} placeholder="Enter Agent Name" label={'Agent Name'} />
//         <Input form={form} name={"agentEmail"} type="email" placeholder="Enter Agent Email" label={'Agent Email'} />

//         <h3 className='text-[1.65rem]'>Reference</h3>
//         <Input form={form} name={"referee1Name"} placeholder="Enter Referee 1 Name" label={'Referee 1 Name'} />
//         <Input form={form} name={"referee1Address"} placeholder="Enter Referee 1 Address" label={'Referee 1 Address'} />
//         <Input form={form} name={"referee1Postcode"} placeholder="Enter Referee 1 Postcode" label={'Referee 1 Postcode'} />
//         <Input form={form} name={"referee1Telephone"} placeholder="Enter Referee 1 Telephone" label={'Referee 1 Telephone'} />
//         <Input form={form} name={"referee1Email"} type="email" placeholder="Enter Referee 1 Email" label={'Referee 1 Email'} />

//         <h3 className='text-[1.65rem]'>Supporting Statement</h3>
//         <Input form={form} name={"supportingStatement"} as="textarea" placeholder="Enter Supporting Statement" label={'Supporting Statement'} />

//         <h3 className='text-[1.65rem]'>Disability/Special Needs</h3>
//         <Dropdown
//           onChange={(value) => {
//             form.setFieldValue("disability", value.value)
//           }}
//           value={[
//             { value: 'A', label: 'No disability' },
//             { value: 'B', label: 'Social/communication impairment' },
//             { value: 'C', label: 'Blind or serious visual impairment' },
//             { value: 'D', label: 'Deaf or serious hearing impairment' },
//             { value: 'E', label: 'Long-standing illness or health condition' },
//             { value: 'F', label: 'Mental health condition' },
//             { value: 'G', label: 'Specific learning difficulty' },
//             { value: 'H', label: 'Physical impairment or mobility issues' },
//             { value: 'I', label: 'Other disability, impairment, or medical condition' },
//             { value: 'J', label: 'Two or more impairments' },
//           ].find(item => item.value === form.values.disability)}
//           placeholder={"Select Disability"}
//           title={"Disability"}
//           name={"disability"}
//           options={[
//             { value: 'A', label: 'No disability' },
//             { value: 'B', label: 'Social/communication impairment' },
//             { value: 'C', label: 'Blind or serious visual impairment' },
//             { value: 'D', label: 'Deaf or serious hearing impairment' },
//             { value: 'E', label: 'Long-standing illness or health condition' },
//             { value: 'F', label: 'Mental health condition' },
//             { value: 'G', label: 'Specific learning difficulty' },
//             { value: 'H', label: 'Physical impairment or mobility issues' },
//             { value: 'I', label: 'Other disability, impairment, or medical condition' },
//             { value: 'J', label: 'Two or more impairments' },
//           ]}
//         />

//         <h3 className='text-[1.65rem]'>Declaration</h3>
//         <Dropdown
//           onChange={(value) => {
//             form.setFieldValue("declaration", value.value === 'yes')
//           }}
//           value={[
//             { value: 'yes', label: 'Yes' },
//             { value: 'no', label: 'No' },
//           ].find(item => item.value === (form.values.declaration ? 'yes' : 'no'))}
//           placeholder={"I confirm that the information given in this form is true, complete and accurate, and no information requested or other material information has been omitted."}
//           title={"Declaration"}
//           name={"declaration"}
//           options={[
//             { value: 'yes', label: 'Yes' },
//             { value: 'no', label: 'No' },
//           ]}
//         />
//         <Input form={form} name={"applicantName"} placeholder="Enter Applicant Name" label={'Applicant Name'} />
//         <Input form={form} name={"date"} type="date" placeholder="Enter Date" label={'Date'} />
//         <Button type={'submit'}>Submit</Button>
//       </form>
//     </StudentContainer>
//   );
// };

// export default StudentForm;


import React from 'react';
import { formSchema } from 'form/formSchema';
import useCustomFormik from 'form';
import Input from 'components/common/atoms/input';
import Dropdown from 'components/common/atoms/dropdown';
import Button from 'components/common/atoms/button';
import StudentContainer from 'components/layout/student-container';
import { FieldArray, useFormikContext } from 'formik';

const validationSchema = {
  courseTitle: formSchema.text,
  proposedStartDate: formSchema.date,
  fullTime: formSchema.boolean,
  proposedYearLevel: formSchema.text,
  title: formSchema.text,
  gender: formSchema.text,
  dateOfBirth: formSchema.date,
  firstName: formSchema.text,
  surname: formSchema.text,
  permanentAddress: formSchema.text,
  country: formSchema.text,
  postcode: formSchema.text,
  mobile: formSchema.text,
  email: formSchema.email,
  nationality: formSchema.text,
  professionalBodyName: formSchema.text,
  professionalBodyRegNo: formSchema.text,
  previousStudyUK: formSchema.boolean,
  previousStudyLevel: formSchema.text,
  previousStudyLCPS: formSchema.boolean,
  highestQualification: formSchema.text,
  qualifications: formSchema.array,
  workExperience: formSchema.array,
  agentUsed: formSchema.boolean,
  agentName: formSchema.text,
  agentEmail: formSchema.email,
  referee1Name: formSchema.text,
  referee1Address: formSchema.text,
  referee1Postcode: formSchema.text,
  referee1Telephone: formSchema.text,
  referee1Email: formSchema.email,
  supportingStatement: formSchema.text,
  disability: formSchema.text,
  declaration: formSchema.boolean,
  applicantName: formSchema.text,
  date: formSchema.date,
};

const initialValues = {
  courseTitle: '',
  proposedStartDate: '',
  fullTime: true,
  proposedYearLevel: '',
  title: '',
  gender: '',
  dateOfBirth: '',
  firstName: '',
  maidenName: '',
  surname: '',
  permanentAddress: '',
  country: '',
  postcode: '',
  correspondenceAddress: '',
  correspondenceCountry: '',
  correspondencePostcode: '',
  daytimeTelephone: '',
  eveningTelephone: '',
  mobile: '',
  email: '',
  nationality: '',
  arrivalDateUK: '',
  permanentResidenceArea: '',
  professionalBodyName: '',
  professionalBodyRegNo: '',
  previousStudyUK: false,
  previousStudyLevel: '',
  previousStudyLCPS: false,
  highestQualification: '',
  qualifications: [],
  workExperience: [],
  agentUsed: false,
  agentName: '',
  agentEmail: '',
  referee1Name: '',
  referee1Address: '',
  referee1Postcode: '',
  referee1Telephone: '',
  referee1Email: '',
  supportingStatement: '',
  disability: '',
  declaration: false,
  applicantName: '',
  date: '',
};

const onSubmit = (values) => {
  console.log(values);
};

const StudentForm = () => {
  const form = useCustomFormik({ onSubmit, validationSchema, initialValues });

  const handleAddQualification = (qualification) => {
    form.setFieldValue('qualifications', [...form.values.qualifications, qualification]);
  };

  const handleAddWorkExperience = (experience) => {
    form.setFieldValue('workExperience', [...form.values.workExperience, experience]);
  };

  return (
    <StudentContainer>
      <form onSubmit={form.handleSubmit} className='max-w-screen-md mx-auto flex flex-col gap-4 py-[2rem]'>
        <h2 className='text-center text-[2.5rem]'>Application Form for Admission to a Degree Programme</h2>

        <h3 className='text-[1.65rem]'>Course Details</h3>
        <Input form={form} name={"courseTitle"} placeholder="Enter Course Title" label={'Course Title'} />
        <Input form={form} name={"proposedStartDate"} type="date" placeholder="Enter Proposed Start Date" label={'Proposed Start Date'} />
        <Dropdown
          onChange={(value) => {
            form.setFieldValue("fullTime", value.value);
          }}
          value={[{ value: true, label: 'Full-time' }, { value: false, label: 'Part-time' }].find(item => item.value === form.values.fullTime)}
          placeholder={"Select Full-time/Part-time"}
          title={"Full-time/Part-time"}
          name={"fullTime"}
          options={[{ value: true, label: 'Full-time' }, { value: false, label: 'Part-time' }]}
        />
        <Input form={form} name={"proposedYearLevel"} placeholder="Enter Proposed Year/Level of Entry" label={'Proposed Year/Level of Entry'} />

        <h3 className='text-[1.65rem]'>Personal Details</h3>
        <Input form={form} name={"title"} placeholder="Enter Title" label={'Title'} />
        <Dropdown
          onChange={(value) => {
            form.setFieldValue("gender", value.value);
          }}
          value={[{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }, { value: 'other', label: 'Other' }].find(item => item.value === form.values.gender)}
          placeholder={"Select Gender"}
          title={"Gender"}
          name={"gender"}
          options={[{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }, { value: 'other', label: 'Other' }]}
        />
        <Input form={form} name={"dateOfBirth"} type="date" placeholder="Enter Date of Birth" label={'Date of Birth'} />
        <Input form={form} name={"firstName"} placeholder="Enter First Name(s)" label={'First Name(s)'} />
        <Input form={form} name={"maidenName"} placeholder="Enter Maiden or Other Name(s)" label={'Maiden or Other Name(s)'} />
        <Input form={form} name={"surname"} placeholder="Enter Surname/Family Name" label={'Surname/Family Name'} />
        <Input form={form} name={"permanentAddress"} placeholder="Enter Permanent Address" label={'Permanent Address'} />
        <Input form={form} name={"country"} placeholder="Enter Country" label={'Country'} />
        <Input form={form} name={"postcode"} placeholder="Enter Postcode" label={'Postcode'} />
        <Input form={form} name={"correspondenceAddress"} placeholder="Enter Correspondence Address" label={'Correspondence Address'} />
        <Input form={form} name={"correspondenceCountry"} placeholder="Enter Correspondence Country" label={'Correspondence Country'} />
        <Input form={form} name={"correspondencePostcode"} placeholder="Enter Correspondence Postcode" label={'Correspondence Postcode'} />
        <Input form={form} name={"daytimeTelephone"} placeholder="Enter Daytime Telephone" label={'Daytime Telephone'} />
        <Input form={form} name={"eveningTelephone"} placeholder="Enter Evening Telephone" label={'Evening Telephone'} />
        <Input form={form} name={"mobile"} placeholder="Enter Mobile" label={'Mobile'} />
        <Input form={form} name={"email"} type="email" placeholder="Enter Email Address" label={'Email Address'} />
        <Input form={form} name={"nationality"} placeholder="Enter Nationality" label={'Nationality'} />
        <Input form={form} name={"arrivalDateUK"} type="date" placeholder="Enter Date of Arrival in UK (if not born in the UK)" label={'Date of Arrival in UK (if not born in the UK)'} />
        <Input form={form} name={"permanentResidenceArea"} placeholder="Enter Area of Permanent Residence" label={'Area of Permanent Residence'} />

        <h3 className='text-[1.65rem]'>Professional Body Membership</h3>
        <Input form={form} name={"professionalBodyName"} placeholder="Enter Professional Body Name" label={'Professional Body Name'} />
        <Input form={form} name={"professionalBodyRegNo"} placeholder="Enter Professional Body Registration Number" label={'Professional Body Registration Number'} />

        <h3 className='text-[1.65rem]'>Previous Study</h3>
        <Dropdown
          onChange={(value) => {
            form.setFieldValue("previousStudyUK", value.value === 'yes');
          }}
          value={[
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' },
          ].find(item => item.value === (form.values.previousStudyUK ? 'yes' : 'no'))}
          placeholder={"Have you previously studied in the UK?"}
          title={"Have you previously studied in the UK?"}
          name={"previousStudyUK"}
          options={[
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' },
          ]}
        />
        <Input form={form} name={"previousStudyLevel"} placeholder="Enter Level" label={'If yes, at what level?'} />
        <Dropdown
          onChange={(value) => {
            form.setFieldValue("previousStudyLCPS", value.value === 'yes');
          }}
          value={[
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' },
          ].find(item => item.value === (form.values.previousStudyLCPS ? 'yes' : 'no'))}
          placeholder={"Have you previously studied at LCPS?"}
          title={"Have you previously studied at LCPS?"}
          name={"previousStudyLCPS"}
          options={[
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' },
          ]}
        />
        <Input form={form} name={"highestQualification"} placeholder="Enter Highest Qualification" label={'Highest Qualification'} />

        <h3 className='text-[1.65rem]'>Academic and Professional Qualifications</h3>
        <FieldArray validateOnChange={false} name="qualifications">
          {({ remove, push }) => (
            <>
              {form.values.qualifications.length > 0 && form.values.qualifications.map((qualification, index) => (
                <div key={index} className='flex flex-col gap-4 border px-2 py-3 rounded'>
                  <Input form={form} name={`qualifications.${index}.institution`} placeholder="Enter Institution" label={`Institution ${index + 1}`} />
                  <Input form={form} name={`qualifications.${index}.qualification`} placeholder="Enter Qualification" label={`Qualification ${index + 1}`} />
                  <Input form={form} name={`qualifications.${index}.year`} placeholder="Enter Year" label={`Year ${index + 1}`} />
                  {/* <Button type="button" onClick={() => remove(index)}>Remove</Button> */}
                </div>
              ))}
              <div>
                <Button type="button" onClick={() => handleAddQualification({}, form)}>Add Qualification</Button>
              </div>
            </>
          )}
        </FieldArray>

        <h3 className='text-[1.65rem]'>Employment and Work Experience</h3>
        <FieldArray validateOnChange={false} name="workExperience">
          {({ remove, push }) => (
            <>
              {form.values?.workExperience.length > 0 && form.values?.workExperience.map((experience, index) => (
                <div key={index} className='flex flex-col gap-4 border px-2 py-3 rounded'>
                  <Input form={form} name={`workExperience.${index}.employer`} placeholder="Enter Employer" label={`Employer ${index + 1}`} />
                  <Input form={form} name={`workExperience.${index}.position`} placeholder="Enter Position" label={`Position ${index + 1}`} />
                  <Input form={form} name={`workExperience.${index}.years`} placeholder="Enter Years" label={`Years ${index + 1}`} />
                  {/* <Button type="button" onClick={() => remove(index)}>Remove</Button> */}
                </div>
              ))}
              <div>
                <Button type="button" onClick={() => handleAddWorkExperience({}, form)}>Add Work Experience</Button>
              </div>
            </>
          )}
        </FieldArray>

        <h3 className='text-[1.65rem]'>Agent Details</h3>
        <Dropdown
          onChange={(value) => {
            form.setFieldValue("agentUsed", value.value === 'yes');
          }}
          value={[
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' },
          ].find(item => item.value === (form.values.agentUsed ? 'yes' : 'no'))}
          placeholder={"Have you used an education agent during your application process?"}
          title={"Have you used an education agent during your application process?"}
          name={"agentUsed"}
          options={[
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' },
          ]}
        />
        {form.values.agentUsed && (
          <>
            <Input form={form} name={"agentName"} placeholder="Enter Agent Name" label={'Agent Name'} />
            <Input form={form} name={"agentEmail"} type="email" placeholder="Enter Agent Email" label={'Agent Email'} />
          </>
        )}

        <h3 className='text-[1.65rem]'>References</h3>
        <Input form={form} name={"referee1Name"} placeholder="Enter Referee Name" label={'Referee 1 Name'} />
        <Input form={form} name={"referee1Address"} placeholder="Enter Referee Address" label={'Referee 1 Address'} />
        <Input form={form} name={"referee1Postcode"} placeholder="Enter Referee Postcode" label={'Referee 1 Postcode'} />
        <Input form={form} name={"referee1Telephone"} placeholder="Enter Referee Telephone" label={'Referee 1 Telephone'} />
        <Input form={form} name={"referee1Email"} type="email" placeholder="Enter Referee Email" label={'Referee 1 Email'} />
        {/* Repeat for other referees if necessary */}

        <h3 className='text-[1.65rem]'>Supporting Statement</h3>
        <Input form={form} name={"supportingStatement"} placeholder="Enter Supporting Statement" label={'Supporting Statement'} multiline />

        <h3 className='text-[1.65rem]'>Disability</h3>
        <Input form={form} name={"disability"} placeholder="Enter Disability" label={'Disability'} />

        <h3 className='text-[1.65rem]'>Declaration</h3>
        <Dropdown
          onChange={(value) => {
            form.setFieldValue("declaration", value.value === 'yes');
          }}
          value={[
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' },
          ].find(item => item.value === (form.values.declaration ? 'yes' : 'no'))}
          placeholder={"I declare that the information provided is true and complete"}
          title={"Declaration"}
          name={"declaration"}
          options={[
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' },
          ]}
        />

        <Input form={form} name={"applicantName"} placeholder="Enter Applicant Name" label={'Applicant Name'} />
        <Input form={form} name={"date"} type="date" placeholder="Enter Date" label={'Date'} />

        <Button type="submit">Submit</Button>
      </form>
    </StudentContainer>
  );
};

export default StudentForm;
