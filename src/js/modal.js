const $modal = document.getElementById('modal')
const $course = document.getElementById('modalCourse')
const $lesson = document.getElementById('modalLesson')
const $success = document.getElementById('modalSuccess')
const $error = document.getElementById('modalError')
const $overlay = document.getElementById('modal-overlay')


let modal = {
  
  open: (type) => {
    $modal.classList.add('opened')
    
    type == 'course' ? $course.classList.add('active') : $lesson.classList.add('active')
  },
  
  showResult: (status) => {
    // If modal has no open class, add one
    !$modal.classList.contains('opened') && $modal.classList.add('opened')
    
    $course.classList.remove('active')
    $lesson.classList.remove('active')
    
    //If success => success modal shows, else error modal shows
    status == 200 ? $success.classList.add('active') : $error.classList.add('active')
  },
  
  close: (e) => {
    if (e.target !== e.currentTarget) return
    $modal.classList.remove('opened')
  }
  
}

$overlay.addEventListener('click', (e) => {
  modal.close(e)
})

export default modal