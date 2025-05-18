import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
const Data =[
  { month: "Enero", goals: 3, assists: 8 },
  { month: "Febreo", goals: 5, assists: 3  },
  { month: "Marzo", goals: 6, assists: 5 },
  { month: "Abril", goals: 7, assists:  2},
  { month: "Mayo", goals: 8, assists: 1 },
  { month: "junio", goals: 5, assists: 9 },
  { month: "julio", goals: 2, assists: 4 }, 
  { month: "Agosto", goals: 2, assists: 3 },
  { month: "Septiembre", goals: 6, assists: 1 },
  { month: "Octubre", goals: 1, assists: 3 },
  { month: "Noviembre", goals: 3, assists: 6 },
  { month: "Diciembre", goals: 5, assists: 7 },
]
const Grafico = () => {
  return (
    <div className='flex justify-center items-center'>
 
      <ResponsiveContainer width="70%" aspect={2}>
        <BarChart
            data={Data}
            width={500}
            height={300}
            margin={{
                top:30,
                
                
            }}
        >

            <CartesianGrid strokeDasharray="4 1 2"/>
                <XAxis dataKey ="month" />
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="goals" fill='#6b48ff' name="Goles"/>
                <Bar dataKey="assists" fill='#d95252' name="Asistencias"/>
                
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Grafico
