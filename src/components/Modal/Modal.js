import React, { Fragment } from 'react'
import { Overlay, WrapperModal, HeaderModal, ContentModal, InputWrapper, InputModal, CloseButton } from './ModalStyled'
import { PrimaryButton } from '../../commonStyled'

const Modal = ({ show, setShow, setLogged }) => {

  const [username, setUsername] = React.useState(()=>{
    if (localStorage.getItem('username') === null)
      return ''
    else
      return JSON.parse(localStorage.getItem('username'))
  });

  function onChange(event){
    const {name, value} = event.target
    setUsername(value)
    localStorage.setItem(name, JSON.stringify(value))
  }

  function closeModal(){
    setShow(false)
  }

  function submit(){
    localStorage.setItem('logged', JSON.stringify(true))
    setLogged(true)
    closeModal()
  }

  return(
    <Fragment>
      {show &&
        <Overlay>
          <WrapperModal>
            <HeaderModal>
              <h2>Enter your username</h2>
            </HeaderModal>
            <CloseButton onClick={()=>closeModal()}>
              X
            </CloseButton>
            <ContentModal>
              <InputWrapper>
                <InputModal
                  id={'username'}
                  name={'username'}
                  onChange={onChange}
                  placeholder={'username'}
                  type='text'
                  value={username}
                />
              </InputWrapper>
              <PrimaryButton
                onClick={()=>submit()}
              >
                Login
              </PrimaryButton>
            </ContentModal>
          </WrapperModal>
        </Overlay>
      }
    </Fragment>
  )
};

export default Modal
