import Link from "next/link"
import Head from "next/head"
import { Field, Formik } from "formik"
import * as yup from "yup"
import { useCallback } from "react"

const initialValues = {
  number: "",
  description: "",
}
const validationSchema = yup.object().shape({
  number: yup.number().required("erreur a").notOneOf([0], "Pas de 0"),
  description: yup.string().required("erreur B"),
})

const App = () => {
  const {State,tate} = 
  const handleFormSubmit = useCallback( (values, {resetForm}) => {
    
  },)

  return (
    <>
      <Head>
        <title>Add</title>
      </Head>
      <h1>Add</h1>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, isValid, isSubmitting }) => (
          <form onSubmit={handleSubmit} noValidate>
            <div>
              <label>Number : </label>
              <Field
                type="int"
                name="number"
                placeholder="Please enter a number"
              />
              <label>Description : </label>
              <Field
                type="text"
                name="description"
                placeholder="Please enter a description"
              />
              <button type="Submit" disabled={!isValid || isSubmitting}>
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
      <h2>
        <Link href="/">
          <a>Back to Journal</a>
        </Link>
      </h2>
    </>
  )
}

export default App
