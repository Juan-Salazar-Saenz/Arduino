int option;
int Parpadiar = 8;
 
void setup(){
  Serial.begin(9600);
  pinMode(Parpadiar, OUTPUT); 
}
 
void loop(){
  //si existe información pendiente
  if (Serial.available()>0){
    //leeemos la opcion
    char option = Serial.read();
    //si la opcion esta entre '1' y '9'
    if (option >= '1' && option <= '9')
    {
      //restamos el valor '1' para obtener el numeroenviado ya que el for comienza desde cero y no desde 1
      option -= '1';
      for(int i=0;i<option;i++){
         digitalWrite(Parpadiar, HIGH);
         delay(500);
         digitalWrite(Parpadiar, LOW);
         delay(500);
      }
    }
  }
}