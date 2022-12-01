// dependencies
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import styled from "styled-components";





const FormContact = styled.div`

.text-primary {
    color: #0CDA90 !important;
  }
  .btn-primary {
    color: #fff;
    background-color: #0CDA90;
    border-color: #0CDA90;
  }
  .btn-primary {
    box-shadow: 0 3px 2px rgb(12 218 144 / 20%);
  }
  .formularioContato { 
    max-width: 600px;
    height: auto;
    float: none;
    margin-top: 81px;
 
    margin-left: 295px;
    padding: 1em;
    margin-bottom: 1em;
    border-radius: 6px;
    background: #fff;
    box-shadow: 1px 0px 1.2px 0px #ccc;
    position: relative;
}
.formularioContato:before { 
    width:0; 
    height:0; 
    border:15px solid transparent; 
    border-bottom-color:#fff; 
    content:""; 
    position:absolute; 
    left:6%; 
    top:-4.5%; 
    margin-top:-4px; 
    margin-left:6px; 
    z-index:2;
}
.formularioContato label  { 
    float:left; 
    width:100%; 
    margin-bottom:1.2em; 
}
.formularioContato label span {
    width: 100%;
    float: left;
    color: #999;
    margin-bottom: 6px;
    font-family:'open_sansregular'; 
}
.formularioContato label input  { 
    font-size: 1em;
    width: 575px;
    color: #555;

    font-family: 'open_sansregular';
    outline: none;
    border: 1px #dee5ed solid;
    border-radius: 134px;
    padding: 0.6em;
    -webkit-transition: 0.3s;
    transition: 0.3s; 
}
.formularioContato label select { 
    font-size:1em; 
    color:#555; 
    border:1px #dee5ed solid; 
    border-radius:4px; 
    padding:0.6em; 
    outline:none; 
    transition: 0.3s;  
}
.formularioContato label textarea { 
    font-size:1em; 
    color:#555; 
    border:1px #dee5ed solid; 
    border-radius:4px; 
    padding:0.6em; 
    outline:none;
    transition: 0.3s;   
}
.formularioContato label input:focus   
{ box-shadow:0 0 5px 0px rgb(178,216,231); border:1px rgb(37,174,230) solid; color:rgb(37,174,230);}

.formularioContato label select:focus 
  { box-shadow:0 0 5px 0px rgb(178,216,231); border:1px rgb(37,174,230) solid; }

.formularioContato label textarea:focus 
{ box-shadow:0 0 5px 0px rgb(178,216,231); border:1px rgb(37,174,230) solid; color:rgb(37,174,230);}
.formularioContato button.btn-envia { 
    
    background-color:rgb(37,174,230); 
    width:100%; display:block; 
    margin:auto; cursor:pointer; 
    border-radius:4px;  
    border:0; 
    padding:0.8em 0em; 
    color:#fff; 
    font-size:1.3em; 
    font-family:'open_sansbold'; 
    text-align: center;
    transition: 0.3s;   
}
.formularioContato button.btn-envia:hover { 
    background-color:#333; 
}
`;



const Contact = () => {


    return (
        <>
            <FormContact>
                <div className="formularioContato">

                    <form action="#" method="post" enctype="multipart/form-data">
                        <label>
                            <span><i className="icon icon-user-1"></i> Nome</span>
                            <input type="text" name="nome" required=""></input>
                        </label>

                        <label>
                            <span><i className="icon icon-email"></i> E-mail</span>
                            <input type="text" name="email" className="fade_8S"></input>
                        </label>
                        <label>
                            <span><i className="icon icon-flag"></i> Assunto</span>
                            <input type="text" name="assunto" required=""></input>
                        </label>

                        <label>
                            <span><i className="icon icon-comment"></i> Mensagem</span>
                            <textarea name="mensagem" rows="3" required=""></textarea>
                        </label>

                        <input type="hidden" name="acao" value="enviar" />
                        <button 
                        style={{backgroundColor:"black",borderRadius:"114px"}} 
                        
                        className="btn-envia" title="Enviar"><b className="icon icon-paper-plane-o"> Enviar</b></button>

                    </form>

                    </div>




            </FormContact>

        </>
    );
}

export default Contact;