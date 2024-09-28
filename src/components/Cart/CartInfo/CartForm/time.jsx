// const CartForm = ({ handleChangeForm }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//   });

//   const handleChangeData = evt => {
//     const { name, value } = evt.target;

//     setFormData(prevData => {
//       const updatedData = {
//         ...prevData,
//         [name]: value,
//       };

//       if (allFieldsFilled(updatedData)) {

//         handleChangeForm(updatedData);
//       }
//       return updatedData;
//     });
//   };

//   return (
//     <Formik
//       initialValues={{
//         name: '',
//         email: '',
//         phone: '',
//         address: '',
//       }}
//       validationSchema={cartFormSchema}
//     >
//       <Form className={styles.form}>
//         <Input
//           handleChange={handleChangeData}
//           valueInput={formData.name}
//           name="name"
//           placeholder="Enter text"
//           type="text"
//           textLabel="Name"
//         />
//         <Input
//           handleChange={handleChangeData}
//           valueInput={formData.email}
//           name="email"
//           placeholder="Enter text"
//           type="email"
//           textLabel="Email"
//         />
//       </Form>
//     </Formik>
//   );
// };

// const Input = ({
//   name,
//   placeholder,
//   type,
//   textLabel,
//   handleChange,
//   valueInput,
// }) => {

//   return (
//     <div className={styles.inputWrap}>
//       <label htmlFor={name}>{textLabel}</label>
//         <Field
//           onChange={handleChange}
//           value={valueInput}
//           id={name}
//           name={name}
//           placeholder={placeholder}
//           type={type}
//         />
//       <ErrorMessage name={name}>{error => <span>{error}</span>}</ErrorMessage>
//     </div>
//   );
// };
