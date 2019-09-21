import React, {StyleSheet}  from 'react';
import { Container, View, Text, Content, Footer } from 'native-base';
import { Image, Button } from 'react-native-elements';
import {WebView} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native'

class PolicyScreen extends React.Component{

 render(){
return(
    <Container>
        <View style={{ width:"100%",height:57}}>
            <View style={{width:"100%"}}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
               <Image source={require("../../assets/backk.png")} resizeMode='contain' style={{width:50,height:50, padding:10,marginTop:10,marginLeft:10}}/>
              </TouchableOpacity>
            </View>
         </View>
  <View style={{width:"100%", alignItems:"center",alignContent:"center",paddingLeft:10,marginTop:20}}>
      <Text style={{fontSize:16,fontWeight:'bold',color:'#1f4b70'}}> CONDICIONES GENERALES DE USO Y CONTRATACIÓN </Text>
 </View >
 <Content padder>
   <View style={{with:"100%"}}>

    <Text style={styles.parrafo}>
       Las presentes condiciones generales de uso e información legal (en adelante, Condiciones Generales) se aplican al sitio web de GADELI DELIVERY APP), cuyo dominio es www.gadeli.com.pe y a la correspondiente aplicación móvil, así como a todos sus sitios relacionados o vinculados desde www.gadeli.com.pe por Gadeli Delivery, así como a sus asociados (en adelante y de forma conjunta, el «sitio»). El sitio es propiedad de Gadeli Delivery. Al utilizar el sitio, muestras tu conformidad con las presentes condiciones de uso. Si no estás de acuerdo, te rogamos te abstengas de utilizarlo.
    </Text>
    <Text style={styles.parrafo}>
        A través de las presentes Condiciones Generales, Gadeli Delivery pone a disposición de los usuarios (en adelante Usuario o Usuarios) el sitio web y la aplicación móvil Gadeli (en adelante denominadas conjuntamente, la Plataforma).
    </Text>
    <Text style={styles.parrafo}>
        En cumplimiento de lo establecido en la normativa reguladora, se exponen los siguientes datos identificativos del titular del sitio:
    </Text>
    <Text style={styles.guiones}>•	Denominación social: CORPORACION GADELI</Text>
    <Text style={styles.guiones}>•	Domicilio social: Asociación Ramón Copaja Mz. D Lt. 14. Alto de la Alianza-Tacna-Tacna</Text>  
    <Text style={styles.guiones}>•	Datos de inscripción en el Registro Mercantil: Nro de TÍTULO 2007-00000562, TOMO DIARIO 2067, Con numero de PARTIDA 11031391</Text>  
    <Text style={styles.guiones}>•	Formulario de Contacto: contacto@gadeli.com.pe </Text>  
    <Text style={styles.titulo}>1.	Objeto</Text>
    <Text style={styles.parrafo}>
        GADELI DELIVERY es un servicio tecnológico, cuya actividad principal es el desarrollo y gestión de una plataforma tecnológica mediante la que a través de una aplicación móvil o de una web (en adelante, la APP) permite a determinadas tiendas locales ofertar sus productos a través de la misma, y en su caso, si los usuarios de la APP y consumidores de las citadas tiendas locales así lo solicitan a través de la APP, de forma accesoria, intermedia en la entrega inmediata de los productos.
    </Text>  
    <Text style={styles.parrafo}>
        Así, Gadeli Delivery cuenta con una Plataforma mediante la cual diferentes comercios, con los que Gadeli puede mantener un acuerdo comercial por el uso de la plataforma, ofrecen una serie de productos y servicios. El Cliente tiene la posibilidad de solicitar la adquisición de productos y servicios de estos comercios mediante el mandato que confiere a un tercero al solicitar un pedido a través de la Plataforma, en cuyos casos Gadeli Delivey actúa como mero intermediario y, por lo tanto, no puede asumir ni asume responsabilidad alguna sobre la calidad de los productos o la correcta prestación de los servicios ofrecidos directamente por los comercios ni por dichos terceros.
    </Text>  
    <Text style={styles.parrafo}>
      Asimismo, Gadeli Delivery es una Plataforma de intermediación “on demand” de mensajería express. La misma pretende facilitar que aquellas personas que necesiten ayuda con sus mandados o sus compras en comercios asociados (en adelante, Clientes), puedan realizar sus mandados mediante dichos terceros, dispuestos a llevar a cabo voluntariamente el mandato que le confieran los Clientes (en adelante, Gadels).
    </Text>
    <Text style={styles.parrafo}>
      Los Gadels por lo tanto, son una red de mensajeros/repartidores que son profesionales independientes que colaboran con Gadeliapp, cuando éstos están interesados en realizar la prestación de servicios de mensajería, se conectan a la Plataforma de Gadeliapp y en un tiempo determinado se comprometen a realizar el servicio de mensajería/reparto/entrega que le encomiende el Cliente mediante el mandato mencionado.
    </Text>
    <Text style={styles.parrafo}>A lo largo de las presentes Condiciones Generales de Uso nos referiremos a Clientes y Gadels como Usuarios.</Text>
    <Text style={styles.titulo}>
        2.	Términos de Uso
    </Text>
    <Text style={styles.parrafo}>
        El acceso a la Plataforma, y la creación voluntaria de un perfil por parte del Usuario, implica el conocimiento y la aceptación expresa e inequívoca de las presentes Condiciones Generales y la Política de Privacidad.
    </Text>
    <Text style={styles.parrafo}>
          Acceso y Registro para Clientes
     </Text>
    <Text style={styles.parrafo}>
      Para poder ser Cliente de la Plataforma es indispensable que se cumplan los siguientes requisitos:
    </Text>
    <Text style={styles.guiones}> 
      •	Haber cumplido o ser mayor de 18 años de edad.
      </Text>
    <Text style={styles.guiones}> 
      •	Cumplimentar de manera veraz los campos obligatorios del formulario de registro, en el que se solicitan datos de carácter personal como nombre de usuario, correo electrónico, número de teléfono y número de tarjeta bancaria.
      </Text>
    <Text style={styles.guiones}> 
      •	Aceptar las presentes Condiciones de uso.
      </Text>
    <Text style={styles.parrafo}>
      El Usuario garantiza que todos los datos sobre su identidad y legitimidad facilitados a Gadeli Delivery en sus formularios de registro de la Plataforma son veraces, exactos y completos. Asimismo, se compromete a mantener actualizados sus datos.
      </Text>
    <Text style={styles.parrafo}>
      En el supuesto en que el Usuario facilite cualquier dato falso, inexacto o incompleto si Gadeli Delivery considera que existen motivos fundados para dudar sobre la veracidad, exactitud e integridad de los mismos, Gadeli Delivery podrá denegarle el acceso y uso presente o futuro de la Plataforma o de cualquiera de sus contenidos y/o servicios.
      </Text>
    <Text style={styles.parrafo}>
      Al darse de alta en la Plataforma, el Usuario seleccionará un nombre de usuario (username) y una clave de acceso (password). Tanto el username como el password son estrictamente confidenciales, personales e intransferibles.
      </Text>
    <Text style={styles.parrafo}>
      El Usuario se compromete a no divulgar los datos relativos a su cuenta ni hacerlos accesibles a terceros. El Usuario será el único responsable en caso de uso de dichos datos por terceros, incluidas las manifestaciones vertidas en la Plataforma, o cualquier otra actuación que se lleve a cabo mediante el uso del username y/o password.
      </Text>
    <Text style={styles.parrafo}>
      Gadeli Delivery no puede garantizar la identidad de los Usuarios registrados, por tanto, no será responsable del uso de la identidad de un Usuario registrado por terceros no registrados. Los Usuarios se obligan a poner inmediatamente en conocimiento de Gadeli Delivery la sustracción, divulgación o pérdida de su username o password, comunicándolo a través del Formulario de Contacto.
    </Text>
    <Text style={styles.titulo}>
      2.1	Perfil
      </Text>
    <Text style={styles.parrafo}>
      Para poder completar el registro en la Plataforma el Usuario deberá proporcionar algunos datos como: nombre de Usuario, dirección de correo electrónico, teléfono, datos de la tarjeta bancaria, etc. Una vez completado el registro, todo Usuario podrá acceder a su perfil y completarlo, y editarlo y/o darse de baja según estime conveniente.
      </Text>
    <Text style={styles.titulo}>
      2.2	Robo o sustracción de la tarjeta de crédito
      </Text>
    <Text style={styles.parrafo}>
      En tanto Gadeli Delivery no puede garantizar la identidad de los Usuarios registrados, los Usuarios tendrán la obligación de informar a Gadeli Delivery en aquellos supuestos en que tengan constancia que la tarjeta de crédito asociada a su perfil de Gadeli Delivery hubiera sido robada, y/o se estuviera utilizando por un tercero de forma fraudulenta. Por ello, toda vez que Gadeli Delivery y su plataforma de pago velan proactivamente por la protección de los Usuarios con las correspondientes medidas de seguridad, para el caso en que el Usuario no informara a Gadeli Delivery de dicha sustracción, Gadeli Delivery no será responsable del uso fraudulento que puedan hacer terceros de la cuenta del Usuario.
     </Text>
    <Text style={styles.titulo}>
      3.	Funcionamiento del servicio. Condiciones del Mandato.
      </Text>
    <Text style={styles.parrafo}>
      Cuando un Usuario registrado como Cliente necesite ayuda con un mandado, deberá dirigirse a la plataforma web o a la correspondiente aplicación de Gadeli Delivery y solicitar el servicio mediante dichos medios telemáticos. El servicio de mensajería básico consiste en la recogida de un producto y su posterior entrega, ambas direcciones establecidas por el Cliente siempre que se encuentren exclusivamente dentro del territorio de actuación de Gadeli Delivery. Asimismo, el Cliente puede solicitar al Gadels que compre presencialmente productos en su nombre, los recoja y los entregue en las direcciones consignadas, a través de mandato el Gadels se compromete a adquirir los productos encomendados por el Cliente en su nombre, y según las indicaciones y especificaciones brindadas por este último.
      </Text>
    <Text style={styles.parrafo}>  
      El Cliente es el único responsable en la correcta consignación de las direcciones de entrega y recogida en la Plataforma, por lo que exime a Gadeli Delivery y al Gadels de cualquier negligencia o error en la recogida o entrega del pedido derivada de la consignación errónea de las direcciones de entrega y recogida. Como consecuencia de ello, será el Cliente quién deba asumir el costo derivado de la incorrecta consignación de las direcciones de entrega y recogida en la Plataforma.
      </Text>
    <Text style={styles.parrafo}> 
      El Cliente deberá proporcionar toda la información, lo más detallada posible, respecto al servicio objeto del encargo, y en su caso, en relación con el producto que solicite comprar al Gadels en su nombre en las tiendas físicas. Para ello, podrá introducir los comentarios que considere útiles en el apartado “comentarios”, así como en su caso, podrá compartir con el Gadels una fotografía para identificar el pedido. El Cliente tendrá comunicación constante con el Gadels, pudiéndose dirigir en todo momento al Gadels a los efectos de que éste ejecute el mandato conferido según las propias indicaciones del Cliente.
      </Text>
    <Text style={styles.parrafo}>  
      El Cliente exime a Gadeli Delivery y al Gadels de cualquier negligencia o error en las indicaciones que consigne para la compra del producto que solicite comprar en su nombre a las tiendas físicas. Como consecuencia de ello, será el Cliente quién deba asumir el costo derivado de la incorrecta consignación de las indicaciones de los productos en la Plataforma (i.e. dirección incorrecta, producto incorrecto).
      </Text>
    <Text style={styles.parrafo}>  
      En la medida que en la plataforma no conste el precio del producto/y o servicio, el Cliente podrá fijar un precio aproximado. En este caso, el servicio o producto podrá ser adquirido presencialmente por el Gadels de acuerdo con lo que el Cliente haya estimado y nunca por una cantidad superior al 30% de dicha estimación. En el caso que el precio sea más alto, el Gadels se comunicará con el Cliente para informarle de esta situación y será éste último quién tome la decisión final de proceder o no con la compra presencial en tienda.
      </Text>
    <Text style={styles.parrafo}> 
      Si el producto y/o servicio no se encuentra disponible, el Gadels deberá llamar al Cliente para exponerle las opciones. En caso de que el Cliente no se encuentre de acuerdo con ninguna de las opciones expuestas por el Gadels y, consecuentemente, no esté interesado en las opciones alternativas, deberá asumir la política de cancelación expuesta en las presentes Condiciones Generales de Uso (en el apartado nueve). Si el Cliente no responde a las llamadas, el Gadels esperará 10 minutos antes de marcharse.
      </Text>
    <Text style={styles.parrafo}>  
      En los supuestos en los que el Cliente no se encontrase en el lugar consignado para la entrega, el Gadels conservará el producto durante 24 horas, o 15 minutos en el caso de productos perecederos. Asimismo, el Cliente deberá asumir el 100% del costo del servicio de mensajería básico, así como del precio del producto en el caso de que se haya adquirido o contratado alguno a través del Gadels por encargo del Cliente, y deberá volver a pagar otro servicio para recibir los productos no entregados. El Gadels en ningún caso será responsable del deterioro o de la caducidad del producto objeto del encargo.
      </Text>
    <Text style={styles.parrafo}>  
      Una vez finalizado el encargo, en el caso de que se haya solicitado la adquisición presencial de un producto, el Gadels entregará al Cliente el recibo físico correspondiente a dicho producto. Si el recado tiene por objeto la mera entrega de un producto, el Gadels se lo entregará al Cliente en el lugar y momento exacto en que éste último le indique. Todo ello sin perjuicio del recibo electrónico por el servicio que recibirá el Cliente en la dirección de correo asociado a su cuenta.
      </Text>
    <Text style={styles.titulo}>
      4.	Devolución de productos
      </Text>
    <Text style={styles.parrafo}>     
      En caso de que el Cliente desee proceder a la devolución de un producto o desee realizar una reclamación acerca de la realización de un servicio, deberá dirigirse directamente al mismo comercio en el cual se realizó la compra con el ticket de compra del comercio que el Gadels le proporcionó en el momento de la entrega del pedido. En caso de reembolso del importe de la compra por parte del comercio al Cliente, será el comercio el que tendrá potestad para decidir el método de devolución (metálico, tarjeta de crédito, vale de compra…). Por lo tanto, la devolución de un producto adquirido por el Gadels en ejecución del mandato conferido por el Cliente, quedará sujeta en todo caso a la política de devoluciones del comercio.
      </Text>
    <Text style={styles.parrafo}>
      En el caso que el Usuario quiera tramitar la devolución de algún producto por no adecuarse a lo que ha solicitado a través de la plataforma, el Usuario deberá aportar una fotografía del pedido total junto con un listado de los productos incorrectos o que no se hayan entregado, así como otras evidencias que demuestren la no adecuación del producto solicitado.
      </Text>
    <Text style={styles.parrafo}>
      El Cliente deberá comprobar los productos que el Gadels, le entregue en la dirección de entrega antes de proceder a firmar y ratificar el mandato. Con la firma, el Cliente confirma y ratifica el mandato, la compra o servicio realizado en su nombre. Asimismo, el Cliente manifiesta que un tercero podrá ratificar el mandato en su nombre, por ejemplo, en aquellos supuestos en que el Cliente no se encuentre en la dirección final de entrega o haya designado a un tercero para la recogida y firma. Así, recae sobre el Cliente y/o dicho tercero la responsabilidad de verificar la adecuación del servicio, así como de en su caso, recabar las evidencias suficientes para justificar lo contrario.
      </Text>
    <Text style={styles.titulo}>
      5.	Tarifas de los servicios y facturación
      </Text>
    <Text style={styles.parrafo}>
      El alta y uso de la Plataforma para los Clientes es completamente gratuita.
      </Text>
    <Text style={styles.parrafo}>
      El uso de la Plataforma por parte de los Gadels y los comercios puede tener un costo asociado en función de que deseen hacer uso de la Plataforma para proveer servicios.
      </Text>
    <Text style={styles.parrafo}>
      El Cliente únicamente deberá pagar por cada servicio solicitado a través de la Plataforma. Adicionalmente, en aquellos servicios que incluyan la compra de un producto, el Usuario deberá pagar el precio de dicho producto. El Usuario, al registrarse a través de la Plataforma y proporcionar la información bancaria requerida, autoriza expresamente a Gadeli Delivery a pasar los recibos correspondientes al pago de los servicios solicitados, incluyendo el precio de los productos solicitados
      </Text>
    <Text style={styles.parrafo}>
      El precio total de cada servicio puede componerse de un porcentaje variable en función de los kilómetros y tiempo que deba recorrer y utilizar el Gadels, así como en su caso, del precio fijado por cada comercio para los casos en que el Usuario solicite la compra física de un producto o servicio. Gadeli Delivery se reserva el derecho de modificar el precio en función de la franja horaria y/o distancia en la que se realice el servicio. De acuerdo con estas condiciones, el Cliente tendrá derecho a saber la tarifa aproximada de su servicio antes de la contratación del mismo y formalización del pago, exceptuando cuando el usuario no especifique la dirección de recogida. La tarifa del servicio de envío podrá variar cuando se dieran circunstancias de fuerza mayor que estuvieran fuera del alance de Gadeli Delivery y que conlleven un aumento de dicha tarifa.
      </Text>
    <Text style={styles.parrafo}>
      Gadeli Delivery se reserva el derecho de modificar sus precios en cualquier momento. Los cambios efectuados tendrán efecto inmediato tras su publicación. El Usuario autoriza expresamente a Gadeli Delivery para que le remita por medios telemáticos, a la dirección de correo electrónica facilitada por el mismo durante el proceso de registro, el recibo de los servicios contratados y/o las facturas generadas. En caso de requerir una factura, el usuario deberá añadir los datos fiscales a la plataforma antes de hacer el pedido.
      </Text>
    <Text style={styles.parrafo}>
      La cancelación posterior del servicio por el usuario, en los casos en que ya hubiera sido asignado un Gadels, facultará a Gadeli Delivery a cargar al Cliente la tarifa por los servicios ya iniciados por el Gadels. Asimismo, en el caso que el Usuario hubiera solicitado al Gadels la compra de un producto en nombre suyo, si el Cliente cancelara el pedido cuando la adquisición ya estuviera realizada, asumirá los costos de los servicios de envío realizados por el Gadels, así como del producto. Todo ello sin perjuicio de que el Cliente pueda solicitar un nuevo servicio a los efectos de devolver los productos adquiridos, o que se le entreguen en otra dirección. Para el caso de productos no perecederos, el Usuario podrá ejercitar su derecho de desistimiento ante el comercio que le ha vendido los productos. Si desea ejercer el derecho a través de Gadeli Delivery, deberá contratar el nuevo servicio.
      </Text>
    <Text style={styles.titulo}>
      6.1. Plataforma de pago
      </Text>
    <Text style={styles.parrafo}>
      El pago de los productos y/o servicios que se venden presencialmente en los Restaurantes y/o tiendas, y se entregan a los Clientes de forma diferida, se efectúa transitoriamente a Gadeli Delivery y éste lo transmite a los Restaurantes y/o establecimientos con los que mantiene un acuerdo comercial o no. Los Restaurantes y/o establecimientos asociados autorizan a Gadeli Delivery a aceptar el pago en su nombre, por lo que el pago del precio de cualquier producto (i.e. comida, bebida, regalo…) efectuado correctamente a favor de Gadeli Delivery descargará al Cliente de las obligaciones de abonar dicho precio al Restaurante y/o establecimientos asociados.
      </Text>
    <Text style={styles.parrafo}>
      Asimismo, el pago del Cliente le descarga de cualquier obligación respecto al Gadels, teniendo el cobro total al Cliente efecto liberatorio sobre cualquier obligación que pudiera tener con Partners y/o Gadels.
      </Text>
    <Text style={styles.parrafo}>
      El pago de los productos y/o servicios realizado por los Clientes se recibe en las cuentas de Gadeli Delivery mediante una Entidad de Dinero Electrónico o en efectivo. En caso de tener cualquier duda en relación a la pasarela de pagos que utiliza Gadeli Delivery, se pone a vuestra disposición el siguiente Formulario de Contacto.contacto@gadeli.com.pe
      </Text>
    <Text style={styles.titulo}>
      6.	Precio de los productos y/o servicios consignados en la Plataforma
      </Text>
    <Text style={styles.parrafo}>
      Todos los precios que se indican en la Plataforma incluyen los impuestos que pudieran ser aplicables y se expresarán en la moneda vigente en función del territorio desde el que opere el Usuario.
      </Text>
    <Text style={styles.parrafo}>
      De acuerdo con la Cláusula 6 anterior, los precios aplicables en cada servicio serán los publicados en la Plataforma sujetos a las particularidades expuestas y aplicados de forma automática en el proceso de contratación en la última fase del mismo.
      </Text>
    <Text style={styles.parrafo}>
      El Cliente podrá comunicarse con el Gadels a los efectos de confirmar el precio final de los productos solicitados.
      </Text>
    <Text style={styles.parrafo}>
      Para cualquier información sobre el pedido solicitado, el Usuario contactará con Gadeli Delivery a través del call center o de su Plataforma donde deberá indicar la descripción del producto o servicio prestado.
      </Text>
    <Text style={styles.parrafo}>  
      De acuerdo con lo anterior, el Cliente mediante la solicitud de compra y envío a través de la plataforma confiere al Gadels un mandato para adquirir presencialmente los productos en su nombre por el precio fijado por los comercios. El Cliente podrá estar en contacto directo con el Gadels tanto durante la realización del pedido, como en la entrega del mismo para indicar al Gadel qué producto solicita.
      </Text>
    <Text style={styles.titulo}>
      7.	Derecho de desistimiento y cancelación de pedidos
      </Text>
    <Text style={styles.parrafo}>
      El Usuario podrá cancelar de forma gratuita un pedido en tanto el Gadels no haya aceptado el pedido.
      </Text>
    <Text style={styles.parrafo}>
      De acuerdo con la propia naturaleza del servicio que ofrece Gadeli Delivery, el Usuario es consciente de que una vez un Gadels haya aceptado voluntariamente un pedido, se considera que la ejecución del mandato de compra ha comenzado y por tanto el Usuario no tendrá derecho a desistir en la solicitud del servicio de forma gratuita.
      </Text>
    <Text style={styles.parrafo}>
      Por lo tanto, si el Usuario cancela un pedido que ya tiene asignado a un Gadels, la Plataforma generará el costo del 100% del servicio básico de entrega en concepto de costo de cancelación para el Usuario.
      </Text>
    <Text style={styles.parrafo}>
      Si, además, en el momento de cancelación del servicio, el Gadels ya hubiese realizado la compra encomendada del producto o la contratación de un servicio, el usuario podrá encargar al Gadels que realice la devolución del mismo. A tal efecto, el Usuario deberá satisfacer el costo total de adquisición de los productos y los costos de entrega, así como el costo del servicio de devolución. En el supuesto que el Gadels haya podido realizar la devolución del producto, se le reintegrará al Usuario el valor del producto, debiendo éste, como se ha dicho, pagar el costo de los dos servicios de recogida y entrega, así como de devolución. La devolución en todo caso estará sujeta a las políticas de devolución del comercio, por lo que el Cliente manifiesta ser conocedor que en el caso de productos perecederos (i.e. comida), es posible que no se pueda proceder a la devolución y, por lo tanto, Gadeli Delivery quedará facultado para cargar tanto el producto que el Gadels ya hubiera adquirido bajo su mandato, como el servicio de envío incurrido.
      </Text>
    <Text style={styles.parrafo}>
      En el caso que el Cliente haya indicado de forma incorrecta la dirección de entrega de los productos, podrá consignar una nueva dirección en cualquier momento siempre que se encuentre dentro de la misma ciudad del encargo inicial y dentro del ámbito de aplicación del Gadel. En ese caso, el Cliente estará encargando la contratación de un nuevo servicio y acepta que se le carguen los importes correspondientes de la nueva entrega. En caso de encontrarse en otra ciudad de la inicialmente indicada, ésta no podrá modificarse para entregarse en una nueva ciudad y el encargo se cancelará, debiendo el Cliente asumir los costos generados según se establece en esta cláusula.
      </Text>
    <Text style={styles.parrafo}>
      Gadeli Delivery se reserva el derecho a cancelar un pedido sin necesidad de alegar causa justa.  En caso de cancelación instada por Gadeli Delivery, el Usuario tendrá derecho al reembolso de la cantidad abonada.
      </Text>
    <Text style={styles.parrafo}>
      Gadeli Delivery dispone de hojas de reclamación oficiales a disposición del consumidor, por el objeto del servicio ofrecido por Gadeli Delivery. Las mencionadas hojas de reclamación podrán solicitarse por parte del consumidor en la ubicación del domicilio fiscal de Gadeli Delivery. 
      </Text>
    <Text style={styles.titulo}>
      8.	Condiciones especiales del servicio de encargo de compra de productos a través de Gadeli Delivery
      </Text>
    <Text style={styles.parrafo}>
      El Cliente tiene la opción de solicitar a través de la Plataforma la adquisición presencial por parte del Gadel de una serie de productos y/o servicios que son ofrecidos por comercios con los que Gadeli Delivery mantiene o no un acuerdo comercial. 
      </Text>
    <Text style={styles.parrafo}>
      Una vez el Cliente seleccione una de las opciones, podrá completar además el pedido mediante un espacio de texto libre para incorporar información más detallada o instrucciones para el Gadel que se encargue de llevar a cabo dicho pedido.
      </Text>
    <Text style={styles.parrafo}>
      A través del espacio libre, el Cliente manifiesta su voluntad de encargar la compra de determinados productos, resultando el Gadels un mero mandatario por cuenta de este. Como consecuencia de ello, sería el cliente el único responsable y quién, llegado el caso, asumiría cualquier incidencia derivada de la naturaleza de dichos productos (i.e. sanción, responsabilidad civil, responsabilidad patrimonial…).
      </Text>
    <Text style={styles.parrafo}>
      Asimismo, el Cliente acepta que todos los productos reflejados en la plataforma de Gadeli Delivery están sujetos a la disponibilidad de los mismos y en este sentido asume la posibilidad de que durante la realización del pedido se encuentre con la no disponibilidad del producto y/o servicio en el Comercio. Adicionalmente, el precio del producto puede variar ligeramente a causa de modificaciones en el punto de venta. Gadeli Delivery se reserva el derecho de proceder con la compra ante variaciones en el precio de hasta un 30%, si superar el citado 30% el Gadels se pondrá en contacto con el cliente para transmitirle la situación.
      </Text>
    <Text style={styles.titulo}>
      8.1	Entregas en el mismo día
      </Text>
    <Text style={styles.parrafo}>
      Gadeli Delivery proporciona al Cliente un servicio de entrega de los productos adquiridos presencialmente por el Gadels. El pedido se podrá realizar siempre que se cumplan las siguientes condiciones en el momento de pago del pedido:
      </Text>
    <Text style={styles.parrafo}>
      •	El servicio se encuentre operativo para la franja horaria escogida.
      •	La mercancía a entregar debe encontrarse dentro del espacio habilitado en las que opere Gadeli Delivery.
      •	El tamaño del pedido en moto o bicicleta no puede superar las medidas: 40cm x 40cm x 30cm.
      •	El peso máximo a cargar en moto o bicicleta en un pedido será, aproximadamente, de 8 Kg.
      </Text>
    <Text style={styles.titulo}>
      8.2	Precio y método de pago
      </Text>
    <Text style={styles.parrafo}>
      El Cliente asume que en todo caso la valoración económica de algunos de los productos podrá variar en tiempo real, debido a las disponibilidades de stock de los establecimientos, y que en todo caso el costo final será siempre comunicado al Cliente de forma previa al momento de pago.
      </Text>
    <Text style={styles.parrafo}>
      El Cliente tendrá contacto continuo con el Gadels, que actuará en su nombre en la adquisición de productos y servicios, por lo que cualquier cambio o variación será comunicada por el Gadels de forma previa a la ejecución del mandato para la aprobación del Cliente. En caso de querer realizar alguna apreciación sobre el pedido encargado, el Cliente tendrá siempre la posibilidad de contactar con el Gadels que ejecuta el mandato otorgado.
      </Text>
    <Text style={styles.parrafo}>
      De igual forma, durante la pasarela de pago, el Cliente será informado del precio final del envío y la hora aproximada de entrega según las condiciones del servicio de recadería de Gadeli Delivery expresadas más arriba.
      </Text>
    <Text style={styles.parrafo}>
      El Cliente podrá realizar el pago de los servicios en efectivo o a través de su tarjeta de crédito o débito. Se informará al Cliente, cuando acceda a realizar el pedido, de las diferentes opciones de pago que tenga. Para el pago con tarjeta, el Cliente deberá facilitar los datos de la mismas a través de la plataforma como método de pago asociado a su cuenta. Gadeli Delivery no almacena el número de la tarjeta en sus servidores, y sólo podrá visualizar los cuatro primeros y los cuatro últimos dígitos de ésta. La información completa será almacenada en los servidores del prestador de servicios de pago que realiza los pagos en nombre de Gadeli Delivery. El pago con tarjeta de crédito o débito supondrá un costo extra para el Cliente. Todo ello de acuerdo con los términos de la plataforma de pago expuestos en la Cláusula 6.1.
      </Text>
    <Text style={styles.parrafo}>
      En caso de pago en efectivo, el cliente deberá abonar el precio en el momento de la entrega del producto y/o cumplimiento del recado en el lugar de entrega. El cliente no podrá negarse a abonar el costo del servicio de entrega y/o el precio del producto solicitado. El cliente únicamente podrá negarse a abonar el costo del servicio si ha realizado un reclamo y ha recibido de parte de Gadeli Delivery una resolución favorable del mismo al momento de la entrega.
      </Text>
    <Text style={styles.parrafo}>
      En caso que no pudiera realizarse por cualquier motivo el cobro del servicio al cliente, quedará bloqueado para utilizar nuevamente la plataforma hasta tanto regularice su deuda.
      </Text>
    <Text style={styles.titulo}>
      9.	Compra de bebidas alcohólicas
      </Text>
    <Text style={styles.parrafo}>
      Los Usuarios que realicen un pedido que incluya la adquisición y/o entrega de bebidas alcohólicas a través de la plataforma deben ser mayores de edad, habiendo cumplido los 18 años. Al realizar un pedido que incluya bebidas alcohólicas, el Usuario confirma que tiene al menos 18 años de edad. Gadeli Delivery se reserva el derecho de negarse a permitir el pedido de compra y/o entrega de alcohol a cualquier persona que no pueda probar tener al menos 18 años de edad.
      </Text>
    <Text style={styles.parrafo}>
      La presente cláusula será de idéntica aplicación a cualquier otro producto y/o servicio análogo reservado a la mayoría de edad según legislación vigente y que sea solicitado por un Usuario a través de la Plataforma.
      </Text>
    <Text style={styles.parrafo}>
      Asimismo, en los casos en que se encuentre restringida la venta y/o entrega de bebidas alcohólicas en determinada fecha o franja horaria, el Usuario es responsable de realizar pedidos en los horarios permitidos según la normativa de aplicación. Gadeli Delivery se reserva el derecho a negarse a permitir el pedido de compra y/o entrega de alcohol fuera de las fechas u horarios permitidos.
      </Text>
    <Text style={styles.titulo}>
      10.	Productos en oficinas de farmacia
      </Text>
    <Text style={styles.parrafo}>
      Gadeli Delivery no realiza la venta ni publicidad de medicamentos de uso humano a través de la Plataforma. Los Gadels actúan como mandatarios de aquellos Usuarios que solicitan medicamentos de uso humano no sujetos a prescripción médica a través de la Plataforma para su recogida.
      </Text>
    <Text style={styles.parrafo}>
      Gadeli Delivery garantiza en todo caso a los Usuarios el consejo farmacéutico antes de solicitar sus medicamentos, para ello los Gadels estarán en contacto continuo para que en caso de duda por parte del Usuario consulte al farmacéutico que dispensará el producto o productos a través del mismo, todo ello con la finalidad que el Farmacéutico pueda dispensar el producto adecuado.
      </Text>
    <Text style={styles.parrafo}>
      En cualquier caso, Gadeli Delivery no se hace responsable del uso que hagan los Usuarios de los productos solicitados en la sección de Farmacia, así como tampoco responderá por las cantidades y/o condiciones de los productos que se dispensen en las oficinas de farmacia.
      </Text>
    <Text style={styles.parrafo}>
      Adicionalmente, la Plataforma podrá ceder a farmacia que dispense el medicamento solicitado por el Usuario, el nombre de usuario y teléfono de éste, a efectos de responderle a las cuestiones planteadas. Dicha cesión estará sujeta en todo caso a la autorización expresa e inequívoca del Usuario de acuerdo con la legislación aplicable en materia de protección de datos de carácter personal.
      </Text>
    <Text style={styles.titulo}>
      11.	Política de materias reservadas en envíos
      </Text>
    <Text style={styles.parrafo}>
      Lista de ejemplos no limitativa:
      Alcohol y Tabaco
      Las entregas de alcohol y tabaco pueden estar limitadas o restringidas en determinados días u horarios. 
      Animales y Especies Reguladas
      Las partes de animales, o fluidos; semillas prohibidas, plantas nocivas; plantas u otros organismos regulados (incluyendo sus derivados) en peligro de extinción o cuyo comercio es en cualquier caso según lo que prevea la ley.
      Pornografía infantil
      Material pornográfico involucrando a menores o contenido que puede ser percibido como pedofilia erótica.
      Drogas
      Sustancias controladas, narcóticos, drogas ilegales, y drogas accesorias, incluyendo psicoactivas y drogas vegetales como setas alucinógenas, así como material promoviendo su uso; o sustancias legales como plantas y hierbas, en una forma que sugiera su ingesta, inhalación, extracción, u otro uso que pueda provocar el mismo uso que un componente, droga o sustancia ilegal o que produzca beneficios no probados para la salud.
      Juego y Apuestas
      Apuestas. Promoción de casinos físicos.
      Productos de Venta en Oficinas de Farmacia
      Los medicamentos OTC/de venta libre, productos sanitarios complementarios, así como cualquier otro producto de higiene, nutrición o análogo, de venta en farmacia y de uso humano se encuentran sujetos al mandato que el Usuario confiera al Gadels y a lo que estime conveniente el farmacéutico.
      Partes humanas
      Órganos u otras partes del cuerpo; fluidos corporales; células madre; embriones.
      Bienes robados o ilegales
      Materiales, productos o información que promueva bienes ilegales o facilite actos ilegales; bienes sobre los que no se tiene la propiedad o no se tiene el derecho a la venta; bienes producidos con violación de los derechos de terceros; bienes en violación de restricciones sobre importación, exportación o etiquetado; vehículos a motor sujetos a restricciones de transferencia; Usted (Usuario de Gadeli Delivery) es única y completamente responsable de verificar que todos los objetos son auténticos y legales.
      Bienes ofensivos
      Bienes, literatura, productos, u otro material que:
      </Text>
    <Text style={styles.parrafo}>
      •  Difame alguna persona o grupo de personas basándose en su raza, etnia, origen nacional, religión, sexo, u otro factor.
      •  Enaltecimiento o incitación de actos violentos.
      •  Promover intolerancia u odio.
      • Promover o apoyar membresía en grupos terroristas u otras organizaciones prohibidas por ley.
      •  Contravenir la moralidad pública.

      Bienes ofensivos relacionados con un crimen
      Fotos u objetos de la escena de un crimen, como pertenencias personales, asociadas con criminales o con actos criminales.
      Materiales preciosos
      Ventas a granel de piedras o materiales raros, escasos o valiosos.
      Dispositivos pirotécnicos y sustancias peligrosas que requieran permiso especial
      Artículos pirotécnicos y bienes relacionados en mercados en que su entrega está regulada, así como sustancias como la gasolina o el propano.
      Armas
      Armas de fuego, munición, y otros objetos incluyendo, pero no limitando a armas de fuego, cuchillos camuflables, o indetectables, armas de artes marciales, silenciadores, munición o revistas de munición.
      Mal uso de la plataforma/Abuso
      </Text>
    <Text style={styles.parrafo}>
      No toleraremos el uso de lenguaje abusivo, así como de actitudes abusivas hacia nuestra compañía o hacia los profesionales independientes.
      </Text>
    <Text style={styles.parrafo}>
      Bienes, objetos, productos y/o artículos hasta determinado valor monetario
      </Text>
    <Text style={styles.parrafo}>
      Cualquiera sea su naturaleza, no podrán superar el importe de USD 100 (cien dólares estadounidenses).
      </Text>
    <Text style={styles.titulo}>
      12.	Geolocalización
      </Text>
    <Text style={styles.parrafo}>
      Gadeli Delivery podrá recoger, utilizar y compartir datos precisos sobre localizaciones, incluyendo la localización geográfica en tiempo real del ordenador o dispositivo móvil del Usuario, siempre que el Usuario lo autorice. Estos datos de localización pueden ser recogidos y utilizados por Gadeli Delivery para mostrar a los Usuarios la ubicación del origen de un encargo y/o la ubicación del origen de destino. Los Usuarios podrán optar por desactivar la Geolocalización en sus dispositivos.
      Es responsabilidad del Usuario consignar correctamente las direcciones de recogida y entrega. En este sentido, Gadeli Delivery no se responsabiliza de error u omisión en la consignación de las mismas por parte del Usuario.
      </Text>
    <Text style={styles.titulo}>
      13.	Obligaciones del Usuario
      </Text>
    <Text style={styles.parrafo}>
      Los Usuarios son completamente responsables del acceso y correcto uso de su perfil y demás contenidos de la Plataforma con sujeción a la legalidad vigente, así como a los principios de buena fe, a la moral, buenas costumbres y orden público. Y específicamente, adquiere el compromiso de observar diligentemente las presentes Condiciones Generales de Uso.
      </Text>
    <Text style={styles.parrafo}>
      Los Usuarios se abstendrán de usar su perfil y el resto de contenidos de la Plataforma con fines o efectos ilícitos y que sean lesivos de los derechos e intereses de terceros, o que de cualquier forma puedan dañar, inutilizar, afectar o deteriorar la Plataforma, sus contenidos y sus servicios. Asimismo, queda prohibido impedir la normal utilización o disfrute de la Plataforma a otros Usuarios.
      </Text>
    <Text style={styles.parrafo}>
      Gadeli Delivery no podrá ser considerada responsable editorial, y declara expresamente que no se identifica con ninguna de las opiniones que puedan emitir los Usuarios de la Plataforma, de cuyas consecuencias se hace enteramente responsable el emisor de las mismas.
      </Text>
    <Text style={styles.parrafo}>
      Quienes incumplan tales obligaciones responderán de cualquier perjuicio o daño que ocasionen. Gadeli Delivery no responderá de ninguna consecuencia, daño o perjuicio que pudiera derivarse de dicho acceso o uso ilícito por parte de terceros.
      </Text>
    <Text style={styles.parrafo}>
      En general, los Usuarios se comprometen, a título enunciativo y no taxativo, a:
      </Text>
    <Text style={styles.parrafo}>
      •	No alterar o modificar, total o parcialmente la Plataforma, eludiendo, desactivando o manipulando de cualquier otra las funciones o servicios de la misma;
      •	No infringir los derechos de propiedad industrial e intelectual o las normas reguladoras de la protección de datos de carácter personal;
      •	No usar la Plataforma para injuriar, difamar, intimidar, violar la propia imagen o acosar a otros Usuarios; - No acceder a las cuentas de correo electrónico de otros Usuarios;
      •	No introducir virus informáticos, archivos defectuosos, o cualquier otro programa informático que pueda provocar daños o alteraciones en los contenidos o sistemas de Gadeli Delivery o terceras personas;
      •	No realizar acciones publicitarias de bienes o servicios sin el previo consentimiento de Gadeli Delivery.
      </Text>
    <Text style={styles.parrafo}>
      Cualquier Usuario podrá reportar a otro Usuario cuando considere que está incumpliendo las presentes Condiciones Generales de Uso, asimismo todos los Usuarios pueden informar a Gadeli Delivery de cualquier abuso o vulneración de las presentes condiciones. Gadeli Delivery verificará este reporte, a la mayor brevedad posible, y adoptará las medidas que considere oportunas, reservándose el derecho a retirar y/o suspender a cualquier Usuario de la Plataforma por el incumplimiento de las presentes Condiciones Generales de Uso. Asimismo, Gadeli Delivery se reserva el derecho a retirar y/o suspender cualquier mensaje con contenido ilegal u ofensivo, sin necesidad de previo aviso o posterior notificación.
      </Text>
    <Text style={styles.titulo}>
      14.	Baja del Usuario
      </Text>
    <Text style={styles.parrafo}>
      El Usuario podrá darse de baja de la Plataforma comunicándolo mediante un correo electrónico a través del Formulario de Contacto.
      </Text>
    <Text style={styles.titulo}>
      15.	Responsabilidad de Gadeli Delivery
      </Text>
    <Text style={styles.parrafo}>
      El Usuario es responsable de contar con los servicios y equipos necesarios para la navegación por Internet y para acceder a la Plataforma. En caso de cualquier incidencia o dificultad para acceder a la Plataforma, el Usuario puede informarlo a Gadeli Delivery a través del call center, que procederá a analizar la incidencia y dará indicaciones al Usuario acerca de cómo resolverla en el plazo más breve posible.
      </Text>
    <Text style={styles.parrafo}>
      Gadeli Delivery no responderá en caso de interrupciones del servicio, errores de conexión, falta de disponibilidad o deficiencias en el servicio de acceso a Internet, ni por interrupciones de la red de Internet o por cualquier otra razón ajena a su cpontrol.
      </Text>
    <Text style={styles.parrafo}>
      Gadeli Delivery no se hace responsable de los errores de seguridad que se puedan producir ni de los daños que puedan causarse al sistema informático del Usuario (hardware y software), a los ficheros o documentos almacenados en el mismo, como consecuencia de:
      </Text>
    <Text style={styles.parrafo}>
      •	La presencia de un virus en el sistema informático o terminal móvil del Usuario que sea utilizado para la conexión a los servicios y contenidos de la Plataforma;
      •	Un mal funcionamiento del navegador;
      •	Del uso de versiones no actualizadas del mismo.
      </Text>
    <Text style={styles.titulo}>
      16.	Responsabilidad por contenidos
      </Text>
    <Text style={styles.parrafo}>
      Gadeli Delivery no tiene obligación de controlar y no controla la utilización que los Usuarios hacen de la Plataforma y, por consiguiente, no garantiza que los Usuarios utilicen la Plataforma de conformidad con lo establecido en las presentes Condiciones Generales de Uso, ni que hagan un uso diligente y/o prudente de la misma. Gadeli Delivery no tiene la obligación de verificar y no verifica la identidad de los Usuarios, no la veracidad, vigencia, exhaustividad y/o autenticidad de los datos que los mismos proporcionan.
      </Text>
    <Text style={styles.parrafo}>
      Gadeli Delivery excluye cualquier responsabilidad por los daños y perjuicios de toda naturaleza que pudieran deberse a la utilización ilícita de la Plataforma por parte de los Usuarios o que puedan deberse a la falta de veracidad, vigencia, exhaustividad y/o autenticidad de la información que los Usuarios proporcionan acerca de sí mismos y, en particular, aunque no de forma exclusiva, por los daños y perjuicios de toda naturaleza que puedan deberse a la suplantación de la personalidad de un tercero efectuada por un Usuario en cualquier clase de comunicación realizada a través de la Plataforma.  En particular, Gadeli Delivery no se hace responsable del uso de la aplicación, así como de los pedidos que pudiera realizar un tercero desde la cuenta del Usuario.
      </Text>
    <Text style={styles.parrafo}>
      Sin perjuicio de lo anterior, Gadeli Delivery se reserva la facultad de limitar, total o parcialmente, el acceso a la Plataforma a determinados Usuarios.
      </Text>
    <Text style={styles.titulo}>
      17.	Cláusula de "no garantía" en caso de perjuicio
      </Text>
    <Text style={styles.parrafo}>
      Gadeli Delivery ofrece garantía con respecto a la autenticidad, la exactitud, la novedad, la fiabilidad, legalidad o no violación de derechos de terceros por parte de los Gadels. En este sentido, los Usuarios manifiestan que comprenden que Gadeli Delivery es una empresa independiente que pone en contacto Clientes y Gadels, y que no asume responsabilidad alguna derivada de la información proporcionada por los Gadels ni por los daños o pérdidas que eventualmente pudieran sufrir por un incumplimiento de las presentes Condiciones Generales de Uso. Por ello Gadeli Delivery no será nunca responsable ni de la disponibilidad de los Gadels ni del cumplimiento adecuado y satisfactorio de los encargos por parte de éstos.
      </Text>
    <Text style={styles.parrafo}>
      Gadeli Delivery realiza la confirmación, valida Gadels, su identidad y antecedentes. En este sentido, cuando un Usuario alcanza el estatus de Gadels ello simplemente indica que dicho usuario ha completado el proceso de alta correspondiente y ha aceptado las presentes Condiciones Generales de Uso y cualquier otra condición particular que le resultara aplicable. 
      </Text>
    <Text style={styles.parrafo}>
      Gadeli Delivery les recomienda a los Clientes que empleen siempre el sentido común y toda su atención a la hora de delegar un encargo a un determinado Gadels.
      </Text>
    <Text style={styles.parrafo}>
      Al ser miembros de la Plataforma, los Usuarios aceptan que cualquier responsabilidad legal que pretendan ejercitar como consecuencia de acciones u omisiones de otros Usuarios de la Plataforma o terceros se limitará a dichos Usuarios o terceros, no procediendo acción de responsabilidad alguna contra Gadeli Delivery.
      </Text>
    <Text style={styles.titulo}>
      18.	Actualización y Modificación de la Plataforma
      </Text>
    <Text style={styles.parrafo}>
      Gadeli Delivery se reserva el derecho de modificar, en cualquier momento y sin previo aviso las presentes Condiciones Generales de Uso y la Política de Privacidad. Los Usuarios deberán leer atentamente estas Condiciones Generales al acceder a la Plataforma. En cualquier caso, la aceptación de las Condiciones Generales será un paso previo e indispensable al acceso de los servicios y contenidos disponibles a través de la Plataforma de Gadeli Delivery.
      </Text>
    <Text style={styles.parrafo}>
      Asimismo, Gadeli Delivery se reserva la facultad de efectuar, en cualquier momento y sin necesidad de previo aviso, actualizaciones, modificaciones o eliminación de información contenida en su Plataforma en la configuración y presentación de ésta y de las condiciones de acceso, sin asumir responsabilidad alguna por ello. Gadeli Delivery no garantiza la inexistencia de interrupciones o errores en el acceso de la Plataforma o a su contenido, ni que ésta se encuentre siempre actualizada, no obstante, Gadeli Delivery llevará a cabo, siempre que no concurran causas que lo hagan imposible o de difícil ejecución, y tan pronto tenga noticia de los errores, desconexiones o falta de actualización en los contenidos, todas aquellas labores tendentes a subsanar los errores, restablecer la comunicación y actualizar los contenidos.
      </Text>
    <Text style={styles.titulo}>
      19.	Propiedad Intelectual
      </Text>
    <Text style={styles.parrafo}>
      Gadeli Delivery es titular o licenciataria de todos los derechos de propiedad intelectual e industrial incluidos en la Plataforma, así como sobre los contenidos accesibles a través de la misma. Los derechos de propiedad intelectual de la Plataforma, así como: textos, imágenes, diseño gráfico, estructura de navegación, información y contenidos que se recogen en ella son titularidad de Gadeli Delivery, a quien corresponde el ejercicio exclusivo de los derechos de explotación de los mismos en cualquier forma y, en especial, los derechos de reproducción, distribución, comunicación pública y transformación, de conformidad con los derechos de propiedad intelectual e industrial.
      </Text>
    <Text style={styles.parrafo}>
      La autorización al Usuario para el acceso a la Plataforma no supone renuncia, transmisión, licencia o cesión total ni parcial sobre derechos de propiedad intelectual o industrial por parte de Gadeli Delivery. No está permitido suprimir, eludir o manipular de ningún modo los contenidos de la Plataforma de Gadeli Delivery. Asimismo está prohibido modificar, copiar, reutilizar, explotar, reproducir, comunicar públicamente, hacer segundas o posteriores publicaciones, cargar archivos, enviar por correo, transmitir, usar, tratar o distribuir de cualquier forma la totalidad o parte de los contenidos incluidos en la Plataforma de Gadeli Delivery para propósitos públicos o comerciales, si no se cuenta con la autorización expresa y por escrito de Gadeli Delivery o, en su caso, del titular de los derechos a que corresponda.
      </Text>
    <Text style={styles.parrafo}>
      El Usuario que proceda a compartir cualquier tipo de contenido a través de la Plataforma, asegura que ostenta los derechos necesarios para hacerlo, quedando exento Gadeli Delivery de cualquier responsabilidad sobre el contenido y legalidad de la información ofrecida. 
      </Text>
    <Text style={styles.titulo}>
      20.	Legislación Aplicable
      </Text>
    <Text style={styles.parrafo}>
      La relación entre Gadeli Delivery y el Usuario, se regirá e interpretará de conformidad con las Condiciones Generales que en materia de interpretación, validez y ejecución se regirán por la legislación peruana; y cualquier controversia se someterá a juicio. 
    </Text>
    </View>
 </Content>
 <Footer style={{backgroundColor:'white'}}>
  <View style={[{width:"70%", alignSelf:'center', marginTop:20}]}>
    <Button
      onPress={() => this.props.navigation.navigate('RegisterPage')}
      title="Aceptar"
      titleStyle={{color:"white"}}
      type="clear"
      containerStyle={{backgroundColor:"#1F4B70",borderRadius:5,marginBottom:10}}
    />
  </View>
 </Footer>
 </Container>
  );
 }
}

export default PolicyScreen