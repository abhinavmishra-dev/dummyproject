import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  timeline:any=[  
            {timelineDate: '2023',
                timelineBody: [
                {timelineIcon:'fa fa-address-book',
                timelineHeading:'Milestone',
                timelineContent:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                },
                {timelineIcon:'fa fa-address-book',
                timelineHeading:'Milestone',
                timelineContent:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                },
                {timelineIcon:'fa fa-address-book',
                timelineHeading:'Milestone',
                timelineContent:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                },                
              ]
            },
            {timelineDate: '2022',
                timelineBody: [
                {timelineIcon:'fa fa-address-book',
                timelineHeading:'Milestone',
                timelineContent:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                },
                {timelineIcon:'fa fa-archive',
                timelineHeading:'Milestone',
                timelineContent:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                },                
              ]
            },
            {timelineDate: '2021',
                timelineBody: [
                {timelineIcon:'fa fa-address-book',
                timelineHeading:'Milestone',
                timelineContent:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                },
                {timelineIcon:'fa fa-archive',
                timelineHeading:'Milestone',
                timelineContent:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                },
                {timelineIcon:'fa fa-briefcase',
                timelineHeading:'Milestone',
                timelineContent:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                },
              ]
            },
            {timelineDate: '2000',
                timelineBody: [
                {timelineIcon:'fa fa-address-book',
                timelineHeading:'Milestone',
                timelineContent:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                },
                {timelineIcon:'fa fa-archive',
                timelineHeading:'Milestone',
                timelineContent:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                },
              ]
            },
  ]
}
