import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],

})

export class FormComponent implements OnInit {

  activities: { [key: string]: activityType} = {};
  val1 = "";
  val2 = "";
  val3 = "";
  choices = "";
  myFoundActivities: string[];

  constructor() {
    this.myFoundActivities = [];
   }
  
  
  ngOnInit(): void {

    this.activities['Basket'] = {'physical':true, 'group':true, 'noEquipment':true}
    this.activities['Cheerleading'] = {'physical':true, 'group':true, 'noEquipment':true}
    this.activities['Fotboll'] = {'physical':true, 'group':true, 'noEquipment':true}
    this.activities['Fäktning'] = {'physical':true, 'group':true, 'noEquipment':true}
    this.activities['Paintball'] = {'physical':true, 'group':true, 'noEquipment':true}
    this.activities['Självförsvarskurs'] = {'physical':true, 'group':true, 'noEquipment':true}
    this.activities['Zumba'] = {'physical':true, 'group':true, 'noEquipment':true}

    this.activities['Badminton'] = {'physical':true, 'group':true, 'equipment':true}
    this.activities['Padel'] = {'physical':true, 'group':true, 'equipment':true}
    this.activities['Klättring på klättervägg'] = {'physical':true, 'group':true, 'equipment':true}

    this.activities['Gym'] = {'physical':true, 'alone':true, 'noEquipment':true}
    this.activities['Appar – en app eller ett nedladdningsbart datorprogram för enklare motion/friskvård som ger "möjlighet till enklare slag av motion och annan friskvård" till exempel en app om löpträning eller viktminskning. Arbetsgivaren kan däremot inte skattefritt tillhandahålla utrustning eller webbtjänster för motion eller annan friskvård i den anställdas bostad.'] = {'physical':true, 'alone':true, 'noEquipment':true}
    this.activities['Crossfit'] = {'physical':true, 'alone':true, 'noEquipment':true}
    this.activities['Simning'] = {'physical':true, 'alone':true, 'noEquipment':true}
    this.activities['Personlig tränare'] = {'physical':true, 'alone':true, 'noEquipment':true}

    this.activities['Agility'] = {'physical':true, 'alone':true, 'equipment':true}
    this.activities['Hästhoppning'] = {'physical':true, 'alone':true, 'equipment':true}
    this.activities['Längskidåkning'] = {'physical':true, 'alone':true, 'equipment':true}

    this.activities['Bowling'] = {'calm':true, 'group':true, 'noEquipment':true}
    this.activities['Yoga'] = {'calm':true, 'group':true, 'noEquipment':true}
    this.activities['Mindfulness som stresshantering'] = {'calm':true, 'group':true, 'noEquipment':true}

    this.activities['Frisbeegolf (discgolf)'] = {'calm':true, 'group':true, 'equipment':true}
    this.activities['Golf'] = {'calm':true, 'group':true, 'equipment':true}

    this.activities['Nikotinavvänjning'] = {'calm':true, 'alone':true, 'noEquipment':true}
    this.activities['Bastubad'] = {'calm':true, 'alone':true, 'noEquipment':true}
    this.activities['Örtbad i syfte att motverka ömhet och stelhet i till exempel armar, axlar, ben, rygg, nacke'] = {'calm':true, 'alone':true, 'noEquipment':true}
    this.activities['Massage – syftet med massagebehandlingar ska vara att lindra spänning i muskulaturen till exempel på grund av ensidigt eller tungt arbete, till exempel kontorsmassage och kroppsmassage. Även massagebehandlingar av enklare slag utförd av exempelvis naprapater, fysioterapeuter och kiropractivitiesorer ingår.'] = {'calm':true, 'alone':true, 'noEquipment':true}
    this.activities['Appar – en app eller ett nedladdningsbart datorprogram för enklare motion/friskvård som ger "möjlighet till enklare slag av motion och annan friskvård" till exempel en app om löpträning eller viktminskning. Arbetsgivaren kan däremot inte skattefritt tillhandahålla utrustning eller webbtjänster för motion eller annan friskvård i den anställdas bostad.'] = {'calm':true, 'alone':true, 'noEquipment':true}

    this.activities['Bågskytte'] = {'calm':true, 'alone':true, 'equipment':true}
    this.activities['Frisbeegolf'] = {'calm':true, 'alone':true, 'equipment':true}
    this.activities['Golf'] = {'calm':true, 'alone':true, 'equipment':true}
    //Object.keys(this.activities).map(obj => console.log(obj))
  }

  change1 (choice:any) {
    this.val1 = choice;
    console.log(this.val1)
  }

  change2 (choice:any) {
    this.val2 = choice;
    console.log(this.val2)
  }

  change3 (choice:any) {
    this.val3 = choice;
    console.log(this.val3)
  }

  hittaAktiviteter(){
    console.log("Hittat aktiviteter!!")
    this.myFoundActivities = [];
    Object.keys(this.activities).map(activity => {
      if (this.val1 === "" || (this.activities as any)[activity][this.val1]){ //Om man inte valt nått ska allt med!
        if (this.val2 === "" || (this.activities as any)[activity][this.val2]) {
          if (this.val3 === 'noEquipment') { 
            if ((this.activities as any)[activity][this.val3]) {
              this.myFoundActivities.push(activity)
            }
          } else { //Om man valt att man är villig att ha equipment ska man även få med noEquipment!
            this.myFoundActivities.push(activity)
          }
        }
      } 
    });
  }

  rensa(){
    this.myFoundActivities=[]
    this.val1 = "";
    this.val2 = "";
    this.val3 = "";
  }



}
interface activityType {
  'physical'?: boolean;
  'calm'?: boolean;
  'group'?: boolean;
  'alone'?: boolean;
  'noEquipment'?: boolean;
  'equipment'?: boolean;
}

