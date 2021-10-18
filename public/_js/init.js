const escolhas = ["PEDRA","PAPEL","TESOURA"]
const p = []
const placar1 = []
const placar2 =[]



function jogada(n){
       
    $('.mao').html('')
    
    p.splice(0,1)

    if(n === 0){
         $('.mao').append(` PEDRA`)
         p.push(escolhas[n])
         
    }

    else if(n === 1){
        $('.mao').append(` PAPEL`)    
        p.push(escolhas[n])
        
    }
    
    
    else if(n === 2)  {
        $('.mao').append(` TESOURA`)
        p.push(escolhas[n])
       
    }

                           
}



function jogar(){


    if(!p[0]) return alert("ESCOLHA NOVAMENTE E FAÇA SUA JOGADA!") 

    const cpu = escolhas[Math.floor(Math.random() *escolhas.length)]  

    $('.maocpu').html('')    

    $('.maocpu').append(cpu)


    if(p[0] === cpu)     p.splice(0,1)  // CASO DE EMPATE
      

    
    else if(p[0] === "PEDRA" && cpu === "PAPEL"){
        
        
        p.splice(0,1)
        placar2.push(1)
        $('.placar2').html('') 
        $('.placar2').append('Pontos:',placar2.length)
      
        

    }

    else if(p[0] === "PEDRA" && cpu === "TESOURA"){
        
        p.splice(0,1)
        placar1.push(1) 
        $('.placar1').html('')
        $('.placar1').append('Pontos:',placar1.length)     
       
        

    }

    else if(p[0] === "PAPEL" && cpu === "TESOURA"){
        
        p.splice(0,1)        
        placar2.push(1)
        $('.placar2').html('')
        $('.placar2').append('Pontos:',placar2.length)
       // alert("VOCÊ PERDEU!")
        

    }

    else if(p[0] === "PAPEL" && cpu === "PEDRA"){
        
        p.splice(0,1) 
        placar1.push(1) 
        $('.placar1').html('')
        $('.placar1').append('Pontos:',placar1.length)              
      
        
    }

    else if(p[0] === "TESOURA" && cpu === "PEDRA"){
        
        p.splice(0,1)
        placar2.push(1)
        $('.placar2').html('')
        $('.placar2').append('Pontos:',placar2.length)
        
       
        
    }

    else if(p[0]=== "TESOURA" && cpu === "PAPEL"){
        
        p.splice(0,1)
        placar1.push(1)  
        $('.placar1').html('')  
        $('.placar1').append('Pontos:',placar1.length)   
       
          
       
    }

    if(placar2.length === 3 || placar1.length === 3) setTimeout(function(){placar()},100)


}

function placar(){


    if(placar2.length === 3) {

        alert("VOCÊ PERDEU! BOA SORTE NA PRÓXIMA VEZ!")
        placar2.splice(0,3)
        placar1.splice(0,3)
        $('.placar1').html('')
        $('.placar2').html('')
        $('.placar1').append('Pontos 0')
        $('.placar2').append('Pontos 0')
        $('.maocpu').html('') 
        $('.mao').html('')
        return 1
        

    }


    if(placar1.length === 3) {

        alert("PARABÉNS! VOCÊ VENCEU!")
        placar2.splice(0,3)
        placar1.splice(0,3)
        $('.placar1').html('')
        $('.placar2').html('')
        $('.placar1').append('Pontos 0')
        $('.placar2').append('Pontos 0')
        $('.maocpu').html('') 
        $('.mao').html('')
        return 1
       
    }

    

}

    



