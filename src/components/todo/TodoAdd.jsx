// import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from '@material-tailwind/react'
// import { Formik } from 'formik'
// import React from 'react'

// export default function TodoAdd() {
//   return (
//     <div>
//       <Formik>


//         {({ handleChange, handleSubmit, values, touched }) => {
//           return <form className='max-w-[400px] space-y-2'>
//             <div>
//               <Input label='Title' name='title' />
//             </div>


//             <div>
//               <Typography variant='h6'>Select One</Typography>
//               <div className='flex gap-10'>
//                 <Radio color='red' name='type' value={'HTML'} label='HTML' />
//                 <Radio color='blue' name='type' value={'React'} label='React' />
//               </div>
//             </div>

//             <div>
//               <Typography variant='h6'>Select One</Typography>
//               <div>
//                 <Checkbox
//                   name='color'
//                   label='Red'
//                   color='red'
//                   value={'red'}
//                 />
//                 <Checkbox
//                   name='color'
//                   label='Blue'
//                   color='blue'
//                   value={'blue'}
//                 />
//                 <Checkbox
//                   name='color'
//                   label='Green'
//                   color='green'
//                   value={'green'}
//                 />
//               </div>
//             </div>

//             <div>
//               <Typography variant='h6'>Select One</Typography>
//               <div>
//                 <Select label='Select Version'>
//                   <Option>Material Tailwind HTML</Option>
//                   <Option>Material Tailwind ReactL</Option>
//                   <Option>Material Tailwind JavaScript</Option>
//                   <Option>Material TailwindL Angular</Option>
//                   <Option>Material Tailwind RedoxL</Option>

//                 </Select>
//               </div>
//             </div>


//             <div>
//               <div className="space-y-2">
//                 <Typography variant='h6'>Select your Country</Typography>
//                 <Select label="Select Country" name='country'>
//                   <Option value='Nepal'>Nepal</Option>
//                   <Option value='india'>India</Option>
//                   <Option value='china'>China</Option>

//                 </Select>
//               </div>
//             </div>






//             <div>
//               <Textarea label='Description' name='description' />
//             </div>
//           </form>
//         }}



//       </Formik>
//     </div>
//   )
// }
















import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from '@material-tailwind/react'
import { Formik } from 'formik'
import React from 'react'

export default function TodoAdd() {
  return (
    <div>

      <Formik
        initialValues={{
          title: '',
          location: '',
          colors: [],
          coutry: '',
          description: ''
        }}
        onSubmit={(val) => {

        }}
      >


        {({ handleChange, handleSubmit, values, touched }) => {

          return <form onSubmit={handleSubmit} className='max-w-[400px] space-y-5'>
            <div>
              <Input value={handleChange} label='Title' name='title' />
            </div>


            <div className=''>
              <Typography variant='h6'>Select One</Typography>
              <div className="flex gap-10">
                <Radio
                  color='red'
                  name="type"
                  value={'Indoor'}
                  label="Indoor"
                />
                <Radio
                  color='amber'
                  name="type"
                  value={'Outdoor'}
                  label="Outdoor"
                />
              </div>
            </div>

            <div>
              <Typography variant='h6'>Select Colors</Typography>
              <div className="flex w-max gap-4">
                <Checkbox
                  name='colors'
                  label='Blue'
                  color="blue"
                  value={'blue'} />
                <Checkbox
                  name='colors'
                  label='Red'
                  color="red"
                  value={'red'} />
                <Checkbox
                  name='colors'
                  label='Green'
                  color="green"
                  value={'green'}
                />
              </div>
            </div>

            <div>
              <div className="space-y-2">
                <Typography variant='h6'>Select your Country</Typography>
                <Select onChange={(e) => setFieldValue('country', e)} label="Select Country" name='country'>
                  <Option value='Nepal'>Nepal</Option>
                  <Option value='india'>India</Option>
                  <Option value='china'>China</Option>

                </Select>
              </div>
            </div>


            <div>
              <Textarea label='Description' name='description' />
            </div>

            <Button type='submit'>Submit</Button>


          </form>
        }}


      </Formik>



    </div>
  )
}