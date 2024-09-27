import { Button, Form, Input, Select, InputNumber } from 'antd';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
function FormDynamic() {
    const { handleSubmit, control } = useForm()

    
    const submitFn = (data) => {
        console.log("data: ", data);

    }

    const {fields, append, remove} = useFieldArray({
        name:'phoneNumber',
        control
    })

    const regionData = [
        {
            value: 1,
            label: 'Tashkent'
        },
        {
            value: 2,
            label: 'Andijon'
        },
        {
            value: 3,
            label: 'Qashqadaryo'
        },
        {
            value: 4,
            label: 'Samarqand'
        },
        {
            value: 5,
            label: 'Buxoro'
        }
    ]

    console.log(fields);
    
    return (
        <>
            <Form >
                <Controller
                    name='name'
                    control={control}
                    render={({ field }) => (
                        <Input {...field}
                            placeholder='Enter your name' />
                    )}
                />
                <Controller
                name='regions'
                control={control}
                render={({ field }) =>(
                    <Select {...field} options={regionData}/>
                )}
                />

                <Controller
                name='phone'
                control={control}
                render={({ field }) => (
                    <InputNumber {...field}/>
                )}/>

                <div>
                    hi
                    {fields.map((field, index) => {
                        return(
                            <div className="form-control" key={field.id}>
                                <Controller
                                name={`phoneNumber.${index}.number`}
                                control={control}
                                render={({ field }) => (
                                    <Input {...field}/>
                                )}
                                />
                                {
                                    index > 0 && (
                                        <Button onClick={()=> remove(index)}> Remove </Button>
                                    )
                                }
                            </div>
                        )
                    })}
                    <Button onClick={()=> append({  })}> Add </Button>
                </div>
                <Button type="primary" htmlType="submit" onClick={handleSubmit(submitFn)}>
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default FormDynamic