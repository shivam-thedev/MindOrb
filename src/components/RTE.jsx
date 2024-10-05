import React from 'react'
import { Controller } from 'react-hook-form'
import { Editor } from '@tinymce/tinymce-react'



export default function RTE({name,label,control,defaultValue=""}) { //control: Comes from react-hook-form, used to control form data.
  return (
    <div>
        {label && <label>{label}</label>}
        {/* Controller is used to wrap controlled inputs like third-party libraries, making it compatible with form handling. */}
        <Controller //Controller: Handles the connection between the form control (through react-hook-form) and the Editor.
        name={name || "content"} //name: The name of the form field.
        control={control}
        render={({field:{onChange}})=>(
            <Editor
                apiKey='ibv5t9kb79qay50u12ogwmulifdr21j8iwrm8i9xsh8881di'
                initialValue={defaultValue}
                init={{
                plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                tinycomments_mode: 'embedded',
                tinycomments_author: 'Author name',
                mergetags_list: [
                    { value: 'First.Name', title: 'First Name' },
                    { value: 'Email', title: 'Email' },
                ],
                ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
                }}
                onEditorChange={onChange}
            />
        )}
        />
    </div>
  )
}




// Controller Usage:
// The Controller component handles the connection to the form's name and control. Inside the Controller, a render prop is passed which takes a field object with the onChange method.
// The Editor (TinyMCE) is rendered inside the render method and is passed the onEditorChange method from TinyMCE, which will be triggered whenever content changes inside the editor.
// The onEditorChange function is mapped to the onChange method from react-hook-form, allowing form state to be updated whenever the editor content changes.