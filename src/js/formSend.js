import formValidate from "./formValidate";
import modal from "./modal";

export default async function formSend(url, data) {

  let fetched = await fetch(url, {
    method: 'POST',
    body: data
  })

  let jsoned = await fetched.json()



  modal.showResult(fetched.status)

  console.log(fetched.status)
  console.log(jsoned)
}