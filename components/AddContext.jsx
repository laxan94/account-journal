import * as yup from "yup"
import { createContext, useCallback, useState } from "react"

const AddContext = createContext({})

const validationSchema = yup.object().shape({
  number: yup
    .number()
    .required("erreur A")
    .notOneOf([0], "Pas de 0")
    .label("number"),
  description: yup.string().required("erreur B").label("description"),
})

const initialValues = {
  add: {
    number: "",
    description: "",
  },
}

const savedInitialValue = {
  savedEntries: [],
}

export const AddProvider = (props) => {
  const [state, setState] = useState(initialValues)
  const handleFormSubmit = useCallback(async ({ state }) => {
    setState(state)
  }, [])

  return (
    <AddContext.Provider
      {...props}
      value={{ state, handleFormSubmit, validationSchema, savedInitialValue }}
    ></AddContext.Provider>
  )
}
export default AddContext
