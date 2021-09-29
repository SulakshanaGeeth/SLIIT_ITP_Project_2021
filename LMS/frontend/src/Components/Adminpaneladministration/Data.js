import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import jsPDF from 'jspdf';
import logo from './image/capital-letter-a.jpg';
class Data extends Component{
    pdfGenarate =()=>{

        var doc=new jsPDF('landscape','px','a4',false);
        doc.addImage(logo,'JPG',65,20,500,400)
        doc.addPage()
        doc.setFont('Helvertical','bold')
        doc.text(60,60,'Name')
        doc.text(60,80,'Email')
        doc.text(60,100,'Mob.NO.')
        doc.setFont('Helvertical','Normal')
        doc.text(100,410,': ABC')
        doc.text(100,80,': abc@gmail.com')
        doc.text(100,100,': 102345678')

        doc.save('a.pdf')
    }

  render(){
    return(
       <div style={{textAlign:'center'}}><br/>


           <Button onClick={this.pdfGenarate}>Download pdf</Button>

       </div>


    )

  }





}
export default Data;
