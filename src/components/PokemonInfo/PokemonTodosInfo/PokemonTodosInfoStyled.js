import styled from 'styled-components'
import { borderType, colors } from '../../../commonStyled'

export const TodosTable = styled.table `
  border-collapse: collapse;
  margin: 1rem;
  width: 100%;
`

export const TodosTableHeader = styled.th `
  border: ${borderType};
  color: ${colors.mediumBlack};
  font-weight: 400;
  padding: 0.25rem;
  text-align: left;
  text-transform: uppercase;
`

export const TodosTableBody = styled.th `
  border: ${borderType};
  color: ${colors.mediumBlack};
  font-weight: 600;
  padding: 0.5rem;
  text-align: left;
`
