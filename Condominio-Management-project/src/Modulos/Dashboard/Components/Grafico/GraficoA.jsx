    import React from 'react'
    import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
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
    const GraficoA = () => {
    return (
        <div className='flex justify-start items-start w-full'>
        <ResponsiveContainer width="100%" aspect={2}>
            <AreaChart
                data={Data}
                width={500}
                height={300}
                margin={{
                    top:30,
                    left:0
                    
                }}
            
            >

                <CartesianGrid strokeDasharray="4 1 2"/>
                    <XAxis dataKey ="month" />
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Area type="monotone" dataKey="goals" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="assists" stroke="#82ca9d" fill="#82ca9d" />
                    
            </AreaChart>
        </ResponsiveContainer>
        </div>
    )
    }

    export default GraficoA
