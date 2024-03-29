    const addForm=document.querySelector('.add');
    const list=document.querySelector('.todos');
    const search=document.querySelector('.search input')
    const button=document.querySelector('button');
    const mainPopup=document.querySelector('.main-popup');
    const close=document.querySelector('.popup-close');


    const generateTemplate=(todo)=>{

    const html=
        `
        <li class=" list-group-item justify-content-between aling-items-center">
        <span>${todo}</span>
        <i class="fa-solid fa-trash delete"></i>
        </li>
        `;
        list.innerHTML+=html;
    }

    button.addEventListener('click',e=>{
        e.preventDefault();
        const todo=addForm.add.value.trim();
        if(todo.length){
            generateTemplate(todo);
            addForm.reset();
        }
        
    })

    list.addEventListener('click',e=>{
        if(e.target.classList.contains('delete'))
        {
            e.target.parentElement.remove();
        }
    })

    const filterTodos=(term=>{
        Array.from(list.children)
        .filter(todo=> !todo.textContent.includes(term))
        .forEach(todo=> todo.classList.add('filtered'))


        Array.from(list.children)
        .filter(todo=> todo.textContent.toLowerCase().includes(term))
        .forEach(todo=> todo.classList.remove('filtered'))

    })

    search.addEventListener('keyup',()=>{
        const term=search.value.trim().toLowerCase();
        filterTodos(term);
    })
button.addEventListener('click',()=>{
        
        mainPopup.style.display='block';
        
    })
    
    
    close.addEventListener('click',()=>{
        mainPopup.style.display='none';
    })
    
    
    mainPopup.addEventListener('click',e=>{
    
        console.log(e.target);
        if(e.target.className ==='main-popup')
        {
            mainPopup.style.display='none';
        }
    
      
    })
