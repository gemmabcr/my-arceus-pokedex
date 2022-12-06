import styled from 'styled-components'
import { borderType, breakpointTablet, colors } from '../../../commonStyled'

export const TodosTable = styled.table`
  border-collapse: collapse;
  margin: 0 1rem 1rem 1rem;
  width: 100%;
`

export const TodosTableHeader = styled.th`
  background-color: rgba(255, 255, 255, 0.3);
  border: ${borderType};
  color: ${colors.mediumBlack};
  font-weight: 400;
  padding: 0.25rem;
  text-align: left;
  text-transform: uppercase;
`

export const TodosTableBody = styled.th`
  border: ${borderType};
  background-color: ${props => props.completed ? 'transparent' : 'rgba(255, 255, 255, 0.5)'};
  color: ${props => props.completed ? colors.lowBlack : colors.mediumBlack};
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  font-weight: 600;
  padding: 0.5rem;
  text-align: left;
`

export const CompletedTable = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InputEditableTable = styled.input`
  margin-right: 0.5rem;
  width: 40px;
`

export const EditableTodoMobile = styled.div`
  align-items: baseline;
  display: flex;
  gap: 0.25rem;
  
  @media (min-width: ${breakpointTablet}) {
    display: none;
  }
`

export const EditableTodoMobileButton = styled.button`
  background-color: #30a7d7;
  border-radius: 50%;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: arial,sans-serif;
  font-size: 80%;
  font-weight: bold;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  vertical-align: middle;
  width: 24px;
  height: 24px;

  &:hover {
    background-color: #218db9;
  }
`

export const EditableTodoMobileText = styled.p`
  text-align: center;
  width: 20px
`

export const EditableTodoPC = styled.div`
  @media (max-width: ${breakpointTablet}) {
    display: none;
  }
`
