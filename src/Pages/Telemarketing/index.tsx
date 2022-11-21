import HeaderNavigation from '../../Components/HeaderNavigation'
import Sidebar from '../../Components/Sidebar'
import {Table} from './style'
import {Heade} from './style'
import {Td} from './style'
import {Tbody} from './style'
import {DivTable} from './style'

export default function Telemarketing(){
    return(
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Sidebar />
            
            <div style={{display: "flex", flexDirection: "column"}}>
                <HeaderNavigation title="Atendimentos" />
            <DivTable>
                <Table>
               
                <Heade>
                    <tr>
                      <th>Protocolo</th>
                      <th>Cliente</th>
                      <th>Atendente</th>
                      <th>Situação</th>
                      <th>Cidade</th>
                  </tr>
                </Heade>
             
                <Tbody>
                    <tr style={{textAlign: 'center'}}>
                      <Td>00590010203</Td>
                      <Td>Melsequidec</Td>
                      <Td>Gustavo Filho</Td>
                      <Td>Aguardando</Td>
                      <Td>Juazeiro do Norte</Td>
                      
                    </tr>
                    <tr style={{textAlign: 'center'}}>
                      <Td>00590010204</Td>
                      <Td>Melsequidec</Td>
                      <Td>Gustavo Filho</Td>
                      <Td>Cancelado</Td>
                      <Td>Triunfo - PE</Td>
                       
                    </tr>
                    <tr style={{textAlign: 'center'}}>
                      <Td>00590010205</Td>
                      <Td>Melsequidec</Td>
                      <Td>Gustavo Filho</Td>
                      <Td>Aguardando</Td>
                      <Td>Barbalha - CE</Td>
                    </tr>
                    <tr style={{textAlign: 'center'}}>
                      <Td>00590010206</Td>
                      <Td>Melsequidec</Td>
                      <Td>Gustavo Filho</Td>
                      <Td>Aguardando</Td>
                      <Td>Juazeiro do Norte - CE</Td>
                    </tr>
                </Tbody>
                <tfoot style={{textAlign: 'center'}}>
                      <Td>00590010207</Td>
                      <Td>Melsequidec</Td>
                      <Td>Gustavo Filho</Td>
                      <Td>Conluído</Td>
                      <Td>Crato - CE</Td>
                     
                </tfoot>
                </Table>
                </DivTable>
            </div>
        </div>
    )
}

