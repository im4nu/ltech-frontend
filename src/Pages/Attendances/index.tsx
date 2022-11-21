import {Container} from './style'
import HeaderNavigation from '../../Components/HeaderNavigation'
import Sidebar from '../../Components/Sidebar'
import {Table} from './style'
import {Heade} from './style'
import {Td} from './style'
import {Tbody} from './style'
import {DivTable} from './style'

export default function Attendances(){
    return(
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Sidebar />
            
            <div style={{display: "flex", flexDirection: "column"}}>
                <HeaderNavigation title="Atendimentos" />
                <Container>
                    <h1 style={{fontWeight: 500}}>Wellcome to Attendances's Screen</h1>
                    
                </Container>
            <DivTable>
                <Table>
               
                <Heade>
                    <tr>
                      <th>Nome</th>
                      <th>Telefone</th>
                      <th>CPF</th>
                      <th>Situação</th>
                      <th>Cidade</th>
                  </tr>
                </Heade>
             
                <Tbody>
                    <tr>
                      <Td>Loran de Sousa Oliveira</Td>
                      <Td> (88)994699583</Td>
                      <Td>62406459312</Td>
                      <Td>Aguardando</Td>
                      <Td>Juazeiro do Norte</Td>
                      
                    </tr>
                    <tr>
                      <Td>Loran de Sousa Oliveira</Td>
                      <Td> (88)994699583</Td>
                      <Td>62406459312</Td>
                      <Td>Aguardando</Td>
                      <Td>Juazeiro do Norte</Td>
                       
                    </tr>
                    <tr>
                      <Td>Loran de Sousa Oliveira</Td>
                      <Td> (88)994699583</Td>
                      <Td>62406459312</Td>
                      <Td>Aguardando</Td>
                      <Td>Juazeiro do Norte</Td>
                    </tr>
                    <tr>
                      <Td>Loran de Sousa Oliveira</Td>
                      <Td> (88)994699583</Td>
                      <Td>62406459312</Td>
                      <Td>Aguardando</Td>
                      <Td>Juazeiro do Norte</Td>
                    </tr>
                </Tbody>
                <tfoot>
                      <Td>Loran de Sousa Oliveira</Td>
                      <Td> (88)994699583</Td>
                      <Td>62406459312</Td>
                      <Td>Aguardando</Td>
                      <Td>Juazeiro do Norte</Td>
                     
                </tfoot>
                </Table>
                </DivTable>
            </div>
        </div>
    )
}

