export const quillConfig = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],  // toggled buttons
        // [{ 'header': 1 }, { 'header': 2 }],  // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }], // outdent/indent
        [{ 'header': [ 4, 5, 6, false] }],

    //     //[{ 'font': [] }],
        [{ 'align': ['','center','right']}],
        [{ 'color': [] }, { 'background': ['none'] }],
        ['clean'],  // remove formatting button

        // ['link'],
        // ['link', 'image', 'video']  
      ],
    },
    keyboard: {
      bindings: {
        enter:{
          key:13,
          handler: (range, context)=>{
            console.log("enter");
            return true;
          }
        }
      }
    }
  }