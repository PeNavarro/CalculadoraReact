import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {ReactComponent as Calculadora} from '../src/images/calculadora.svg'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Soma from '../src/components/Soma'

const App = () => {

    const [numero1, setNumero1] = useState('')
    const [numero2, setNumero2] = useState('')
    const [resultado, setResultado] = useState('')

    useEffect(()=>{
        document.title = "Calculadora React"
    },[])

    useEffect(()=>{
        if(parseFloat(numero1) && parseFloat(numero2)){
            setResultado(Soma(numero1, numero2))
        }else{
            setResultado('')
        }
    },[numero1, numero2])
    return(
        <Container>
            <Row>
                <Col lg={6} xs={12}>
                    <h4>Calculadora React</h4>
                    <Form>
                        <Form.Group>
                            <Form.Label>Número 1</Form.Label>
                            <Form.Control name="num1" type="number" value={numero1} onChange={e => setNumero1(e.target.value)} required/> 
                            <Form.Control.Feedback type="invalid">É obrigatório informar o número 1</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Número 2</Form.Label>
                            <Form.Control name="num2" type="number" value={numero2} onChange={e => setNumero2(e.target.value)} required/>
                            <Form.Control.Feedback type="invalid">É obrigatório informar o número 2</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Resultado</Form.Label>
                            <Form.Control name="resultado" type="text" value={resultado} readOnly></Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit">Calcular</Button>
                        &nbsp;
                        <Button variant="danger" type="button">Limpar</Button>
                    </Form>
                </Col>
                <Col lg={6} xs={12}>
                    <Calculadora/>
                </Col>
            </Row>
        </Container>
    )
}

export default App