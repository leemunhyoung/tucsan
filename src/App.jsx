import * as React from 'react'
import 'wonho-ui/css/style.scss'
import { Button } from 'wonho-ui/component'
import './App.scss'
import Example from './Example'


function App() {
  const [tabState, setTabState] = React.useState(1);
  function Tab1Contents() {
    return(
      <div className='width100 h500 bgc-primary'/>
    )
  }
  function Tab2Contents() {
    return(
      <div className='width100 h500 bgc-black'/>
    )
  }
  function Tab3Contents() {
    return(
      <div className='width100 h500 bgc-grayc'/>
    )
  }
  function Tab4Contents() {
    return(
      <div className='width100 h500 bgc-gray6'/>
    )
  }
  function TabClick1() {
    setTabState(1)
  }
  function TabClick2() {
    setTabState(2)
  }
  function TabClick3() {
    setTabState(3)
  }
  function TabClick4() {
    setTabState(4)
  }
  return (
    <>
      <div className='flexColumn'>
        <div className='flex'>
          <div onClick={TabClick1}>
            <Button variant={`${tabState == 1 ? 'outlined' : ''}`} >
              Tab1
            </Button>  
          </div>
          <div onClick={TabClick2}>
            <Button variant={`${tabState == 2 ? 'outlined' : ''}`} >
              Tab2
            </Button>  
          </div>
          <div onClick={TabClick3}>
            <Button variant={`${tabState == 3 ? 'outlined' : ''}`} >
              Tab3
            </Button>  
          </div>
          <div onClick={TabClick4}>
            <Button variant={`${tabState == 4 ? 'outlined' : ''}`} >
              Tab4
            </Button>  
          </div>
        </div>
        {
          tabState == 1 ? <Tab1Contents/> :
          tabState == 2 ? <Tab2Contents/> :
          tabState == 3 ? <Tab3Contents/> :
          tabState == 4 ? <Tab4Contents/> : <></>
        }  
      </div>
    </>
  )
}

export default App;
