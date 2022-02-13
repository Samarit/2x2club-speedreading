import validate from "validate.js"

const constraints = {
  name: {
    presence: true
  },
  email: {
    presence: true,
    email: true
  },
  phone: {
    presence: true,
    format: {
      // Regexp for RU abonents
      pattern: /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
    }
  }
}

export default function formValidate(form) {
  //Returns object with errors. If validate passes returns undefined
  return validate( validate.collectFormValues(form), constraints )
}