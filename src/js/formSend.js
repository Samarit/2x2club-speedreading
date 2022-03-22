import modal from "./modal"

export default async function formSend(url, form) {

  let data = new FormData(form)

  form.classList.add('loading')

  let fetched = await fetch(url, {
    method: 'POST',
    body: data
  })

  form.classList.remove('loading')

  modal.showResult(fetched.status)
}