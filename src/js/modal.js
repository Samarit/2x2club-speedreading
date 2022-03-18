const $modal = document.getElementById('modal')
const $course = document.getElementById('modalCourse')
const $lesson = document.getElementById('modalLesson')
const $success = document.getElementById('modalSuccess')
const $error = document.getElementById('modalError')
const modalCloseElems = document.querySelectorAll('[data-close]')


let modal = {
  
  open: (type) => {
    $modal.classList.add('opened')
    
    type == 'course' ? $course.classList.add('active') : $lesson.classList.add('active')
  },
  
  showResult: (status) => {
    // If modal has no open class, add one
    !$modal.classList.contains('opened') && $modal.classList.add('opened')
    
    _removeActive()
    
    //If success => success modal shows, else error modal shows
    status == 200 ? $success.classList.add('active') : $error.classList.add('active')

    setTimeout(() => {
      _removeActive()
      $modal.classList.remove('opened')
    }, 3000)
  },
  
  close: (e) => {
    if (e.target !== e.currentTarget) return
    _removeActive()
    $modal.classList.remove('opened')
  }
  
}

modalCloseElems.forEach( (elem, i) => {
  elem.addEventListener('click', (e) => {
    modal.close(e)
  })
})

function _removeActive() {
  $course.classList.remove('active')
  $lesson.classList.remove('active')
  $success.classList.remove('active')
  $error.classList.remove('active')
}

export default modal