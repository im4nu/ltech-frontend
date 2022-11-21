import HeaderNavigation from '../../Components/HeaderNavigation'
import Sidebar from '../../Components/Sidebar'
import {Table} from './style'
import {Heade} from './style'
import {Td} from './style'
import {Tbody} from './style'
import {DivTable} from './style'

export default function Employess(){
    return(
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Sidebar />
            
            <div style={{display: "flex", flexDirection: "column"}}>
                <HeaderNavigation title="Funionários" />
            <DivTable>
                <Table>
               
                <Heade>
                    <tr>
                      <th>Nome</th>
                      <th>Telefone</th>
                      <th>CPF</th>
                      <th>ID</th>
                      <th>Cidade</th>
                  </tr>
                </Heade>
             
                <Tbody>
                    <tr style={{textAlign: 'center'}}>
                      <Td>Loran de Sousa Oliveira</Td>
                      <Td> (88)994699583</Td>
                      <Td>62406459312</Td>
                      <Td>030</Td>
                      <Td>Juazeiro do Norte</Td>
                      
                    </tr>
                    <tr style={{textAlign: 'center'}}>
                      <Td>Loran de Sousa Oliveira</Td>
                      <Td> (88)994699583</Td>
                      <Td>62406459312</Td>
                      <Td>030</Td>
                      <Td>Juazeiro do Norte</Td>
                       
                    </tr>
                    <tr style={{textAlign: 'center'}}>
                      <Td>Loran de Sousa Oliveira</Td>
                      <Td> (88)994699583</Td>
                      <Td>62406459312</Td>
                      <Td>030</Td>
                      <Td>Juazeiro do Norte</Td>
                    </tr>
                    <tr style={{textAlign: 'center'}}>
                      <Td>Loran de Sousa Oliveira</Td>
                      <Td> (88)994699583</Td>
                      <Td>62406459312</Td>
                      <Td>030</Td>
                      <Td>Juazeiro do Norte</Td>
                    </tr>
                </Tbody>
                <tfoot style={{textAlign: 'center'}}>
                      <Td>Loran de Sousa Oliveira</Td>
                      <Td> (88)994699583</Td>
                      <Td>62406459312</Td>
                      <Td>030</Td>
                      <Td>Juazeiro do Norte</Td>
                     
                </tfoot>
                </Table>
                </DivTable>
            </div>
        </div>
    )
}

