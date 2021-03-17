import React from 'react'
import Link from 'next/link'

const Pesquisa = () => {
    const save = async () => {
        const form = {
            Nome: 'aa',
            Email: 'bb',
            Whatsapp: 'cc'
        }
        const response = await fetch('/api/save', {
            method: 'POST',
            body: JSON.stringify(form)
        })

        const data = await response.json()
        console.log(data)
    }
    return (
        <div className='pt-6'>
            <h1 className='text-center font-bold my-6 text-2xl'>Criticas e sugestões</h1>
            <p className="text-center">O restaurante X sempre busca por atender melhor seus clientes.<br />
             Por isso, estamos sempre abertos a ouvir sua opinião.</p>
            <div className='w-1/5 mx-auto'>
                <label className='font-bold'>Seu nome:</label>
                <input className='p-4 block shadow bg-blue-100 my-2 rounded' type="text" />
                <button className='bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow' onclick={save}>Salvar</button>
            </div>
        </div>
    )
}

export default Pesquisa