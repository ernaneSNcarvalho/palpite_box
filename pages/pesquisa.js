import React, { useState } from 'react'
import Link from 'next/link'

const Pesquisa = () => {
    const [form, setForm] = useState({
        Nome: '',
        Email: '',
        Whatsapp: ''
    })
    const save = async () => {
        try{
            const response = await fetch('/api/save', {
            method: 'POST',
            body: JSON.stringify(form)
        })

        const data = await response.json()
        console.log(data)
        }catch(err){
            
        }
    }
    const onChange = evt => {
        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            ...old,
            [key]: value
        }))
    }
    return (
        <div className='pt-6'>
            <h1 className='text-center font-bold my-6 text-2xl'>Criticas e sugestões</h1>
            <p className="text-center">O restaurante X sempre busca por atender melhor seus clientes.<br />
             Por isso, estamos sempre abertos a ouvir sua opinião.</p>
            <div className='w-1/5 mx-auto'>
                <label className='font-bold'>Seu nome:</label>
                <input className='p-4 block shadow bg-blue-100 my-2 rounded' type="text" placeholder='Nome' onChange={onChange}  name='Nome' value={form.Nome} />
                <label className='font-bold'>Email:</label>
                <input className='p-4 block shadow bg-blue-100 my-2 rounded' type="text" placeholder='Email'  onChange={onChange}  name='Email' value={form.Email} />
                <label className='font-bold'>Whatsapp:</label>
                <input className='p-4 block shadow bg-blue-100 my-2 rounded' type="text" placeholder='Whatsapp'  onChange={onChange}  name='Whatsapp' value={form.Whatsapp} />
                <button className='bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow' onClick={save}>Salvar</button>
                <pre>
                    {JSON.stringify(form, null, 2)}
                </pre>
            </div>
        </div>
    )
}

export default Pesquisa