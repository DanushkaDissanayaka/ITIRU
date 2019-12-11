import { Component, OnInit } from '@angular/core';
import { TableContent, TableModel } from './models/TableModel';


@Component({
  selector: 'app-details-program',
  templateUrl: './details-program.component.html',
  styleUrls: ['./details-program.component.scss']
})
export class DetailsProgramComponent implements OnInit {

  icitrS1: TableModel
  icitrS2: TableModel
  icitrS3: TableModel
  icitrS4: TableModel
  itruS1: TableModel
  itruS2: TableModel
  itruS3: TableModel
  itruS4: TableModel
  constructor() {
    this.icitrS1 = new TableModel();
    this.icitrS1.title = "ICITR Technical Session (ICITR-S1)";
    this.icitrS1.chair = "Dr. T.S.S Jayawaradena"
    this.icitrS1.coChair = "Dr.(Mrs.) T.C. Sandanayake"
    this.icitrS1.content = [
      { time: '9.00 - 9.15', Paper: 'A mobile application for crowdsourced road condition monitoring', Presenter: 'TKK Thilakarathna' },
      { time: '9.15 - 9.30', Paper: 'Investigating the Learning Progress of CNNs in Script Identification Using Gradient Values', Presenter: 'Eigo Tomioka' },
      { time: '9.30 - 9.45', Paper: 'Blockchain based decentralized knowledge sharing system - Jigsaw', Presenter: 'Azeem K.P.A.M' },
      { time: '9.45 - 10.00', Paper: 'Automatic Classification of Neonatal Sleep-Wake States Based on Facial Video Analysis', Presenter: 'Yohei Mukai' },
      { time: '10.00 - 10.15', Paper: 'Blockchain & Machine learning Based Secure Personal Medical Record Storage and Sharing Platform - DataBlock', Presenter: 'Sharmilan S' },
    ];
    this.icitrS2 = new TableModel();
    this.icitrS2.title = "ICITR Technical Session (ICITR-S2)";
    this.icitrS2.chair = "Prof. Syoji Kobashi"
    this.icitrS2.coChair = "Prof. R.A.R.C. Gopura"
    this.icitrS2.content = [
      { time: '13.30 - 13.45 ', Paper: 'Detecting and Capturing the Intensity of a Brain Tumor using MRI Images', Presenter: 'TDL Gayanga' },
      { time: '13.45 - 14.00 ', Paper: 'IoT Driving Assistant System for Elderly', Presenter: 'Kuan-Min Huang' },
      { time: '14.00  - 14.15', Paper: 'Object Detection with Deep Learning for Underwater Environment', Presenter: 'Chia-Chin Wang' },
      { time: '14.15  - 14.30', Paper: 'A Scenario-based ER Diagram and Query Generation Engine', Presenter: 'Sashini Hettiarachchi' },
      { time: '14.30  - 14.45', Paper: 'Detecting Automatically Generated Tweets Using Lexical Analysis and Profile Credibility', Presenter: 'Nishan Chathathuranga Wickramarathna' },
      { time: '14.45  - 15.00', Paper: 'Interactive Solution to Improve Flood Awareness Among Public – Flood Run', Presenter: 'Thusiru Karunanayake' },

    ];


    this.itruS1 = new TableModel();
    this.itruS1.title = "ITRU Symposium Technical Session (ITRU-S1)";
    this.itruS1.chair = "Dr. K.S.D. Fernando"
    this.itruS1.coChair = "Dr.Thilak Chaminda"
    this.itruS1.content = [
      { time: '9.00 - 9.15', Paper: 'Brain Tumor Identification Using Image Processing Techniques', Presenter: 'A.L. Swarnamali' },
      { time: '9.15 - 9.30', Paper: 'Blockchain-based Secure, Reliable, and Distributed Voting System for Decision Making in Government Policies and Projects', Presenter: 'Indika Sampath Sirimanna' },
      { time: '9.30 - 9.45', Paper: 'Artificial Intelligence and Law', Presenter: 'Malluwawadu N.G' },
      { time: '9.45 - 10.00', Paper: 'Study on Business Intelligence', Presenter: 'W.A.M.Prabuddhi' },

    ];
    this.itruS2 = new TableModel();
    this.itruS2.title = "ITRU Symposium Technical Session (ITRU-S2)";
    this.itruS2.chair = "Dr. Pradeep Kalansooriya"
    this.itruS2.coChair = "Dr. L. Ranathunga"
    this.itruS2.content = [
      { time: '13.30 - 13.45', Paper: 'Analyzing Features of YouTube Gaming Videos Based on the Viewer’s Comments', Presenter: 'H.C. Gajanayake' },
      { time: '13.45 - 14.00', Paper: 'Review of Prediction of Human Diseases using DNA Sequencing Technologies', Presenter: 'Lokuge L.D.C.S' },
      { time: '14.00 - 14.15', Paper: 'Big Data in Astronomy', Presenter: 'K.L.Kasun Chathuranga Perera' },
      { time: '14.15 - 14.30', Paper: 'A Review on Using Wearable Intelligence to Enhance Special Education', Presenter: 'Gethma Chethani Perera' },
    ];

    /**
     * Day 2
     */
    this.icitrS3 = new TableModel();
    this.icitrS3.title = "ICITR Technical Session (ICITR-S3)";
    this.icitrS3.chair = "Prof. Chinthaka Premachandra"
    this.icitrS3.coChair = "Mr. C.P. Wijesiriwardena"
    this.icitrS3.content = [
      { time: '9.00 - 9.15', Paper: 'Teachers Perception on Learner Performance when Introducing ICT to Junior Grades in Schools: A Case of Colombo District in Sri Lanka', Presenter: 'Sashini Hettiarachchi' },
      { time: '9.15 - 9.30', Paper: 'Speech Document Summarization using Neural Network', Presenter: 'Kirusiha Balasundaram' },
      { time: '9.30 - 9.45', Paper: 'Speaker Change Detection for Conversational Speech using Synthesized Voice Embedding', Presenter: 'Mathangi Krishnathasan' },
      { time: '9.45 - 10.00', Paper: 'Feature based Speaker Embedding on conversational speeches', Presenter: 'Hinduja Balasubramaniyam,' },
      { time: '10.00 - 10.15', Paper: 'A Review of Query Optimization Techniques for Complex Event Processing', Presenter: 'KPD Perera' },

    ];

    this.icitrS4 = new TableModel();
    this.icitrS4.title = "ICITR Technical Session (ICITR-S4)";
    this.icitrS4.chair = "Prof. Hooman Samani"
    this.icitrS4.coChair = "Dr. Palitha Dassanayake"
    this.icitrS4.content = [
      { time: '13.30 - 13.45', Paper: 'Change Detection and Tracking using Synthetic Aperture Radar Videos', Presenter: 'Hasara Maithree' },
      { time: '13.45 - 14.00', Paper: '4ONSE as a complementary to conventional weather observation network', Presenter: 'Emeshi Warusawitharana' },
      { time: '14.00 - 14.15', Paper: 'Feasibility Evaluation of A Solar Powered Automobile Air-Conditioning System', Presenter: 'W.M.M.S. Ranaweera,' },
    ];

    this.itruS3 = new TableModel();
    this.itruS3.title = "ITRU Symposium Technical Session (ITRU-S3)";
    this.itruS3.chair = "Prof. Chan-Yun Yang"
    this.itruS3.coChair = "Dr. Surangani Bandara"
    this.itruS3.content = [
      { time: '9.00 - 9.15', Paper: 'Bioinformatics For Cancer Diagnosis', Presenter: 'S.M.C.A Samarasinghe' },
      { time: '9.15 - 9.30', Paper: 'Self-organizing map based approach to interpret outliers and cost reduction analysis for electricity consumption', Presenter: 'Samaranayaka J. R. A. C. P.' },
      { time: '9.30 - 9.45', Paper: 'IoT Based Greenhouse System for Tropical Countries', Presenter: 'KHH Priyadarshana' },
    ];

    this.itruS4 = new TableModel();
    this.itruS4.title = "ITRU Symposium Technical Session (ITRU-S4)";
    this.itruS4.chair = "Dr. Sidath Liyanage"
    this.itruS4.coChair = "Mr. S.C. Premaratne"
    this.itruS4.content = [
      { time: '13.30 - 13.45', Paper: 'Study of Factors Relating to the Failures of Information Systems', Presenter: 'Kanchana R.M.A' },
      { time: '13.45 - 14.00', Paper: 'Utilizing IoT in Smart Cities as an approach to Urban Sustainability', Presenter: 'D.P.S. Jayasiriwardene' },
      { time: '14.00 - 14.15', Paper: 'Performance Enhancement in Deep Learning Algorithms using Parallel Computing Techniques', Presenter: 'W.M.S.A. Panditharatne' },
    ];

  }
  ngOnInit() {
  }

}
