import { Container } from "./styles";

export function ActivyTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Unidade Curricular</th>
                        <th>Atividades</th>
                        <th>Avaliação</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Programação</td>
                        <td>av 1</td>
                        <td>10</td>
                        <td>29/12/2021</td>
                    </tr>
                    <tr>
                        <td>Programação</td>
                        <td>av 2</td>
                        <td>8</td>
                        <td>01/01/2021</td>
                    </tr>
                    <tr>
                        <td>Programação</td>
                        <td>av 3</td>
                        <td>9</td>
                        <td>02/01/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}