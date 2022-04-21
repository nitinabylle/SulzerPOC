import { Component, OnInit, Input, ViewChildren, QueryList, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { TreeModel } from 'src/app/model/tree.model';


class FileFolders{
  constructor(
    public name:string,
    public code:string,
    public children:FileFolders[],

    ){}
}

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {

  demoData:TreeModel;
  demoData2:TreeModel;
  treeData:FileFolders[];
  showSideNav:boolean=true;
  @Input() node = '';
  
  constructor() { }

  ngOnInit() {
    this.prepareData();
    this.showSideNav= true;
  }

  prepareData(){

    let pictures:Array<FileFolders>= new Array<FileFolders>();
    let p1:FileFolders=new FileFolders("IDAE","VAC",null);
    let p2:FileFolders=new FileFolders("E&S","GRAD",[new FileFolders("Column1","grad_111",[new FileFolders("Section1",this.node,null)]),
    new FileFolders("E & S Euroscientific LTD","grad_313",null)]);
    pictures.push(p1);
    pictures.push(p2);

    let videos:Array<FileFolders>= new Array<FileFolders>();
    let v1:FileFolders=new FileFolders("Family","FMLY",[new FileFolders("family_111.jpg","family_111",null),
                                                         new FileFolders("family_212.jpg","family_212",null),
                                                         new FileFolders("family_313.jpg","family_313",null)]);
    let v2:FileFolders=new FileFolders("Jhon Doe","JhonDoe",[new FileFolders("Jhon_111.jpg","Jhon_111",null),
                                                        new FileFolders("jhon_313.jpg","jhon_313",null)]);
    let v3:FileFolders=new FileFolders("Jane Doe","JaneDoe",[new FileFolders("Jane_111.jpg","Jane_111",null),
    new FileFolders("Jane_212.jpg","Jane_212",null),
    new FileFolders("Jane_312.jpg","Jane_312",null),
    new FileFolders("Jane_412.jpg","Jane_412",null),
    new FileFolders("Jane_313.jpg","Jane_313",null)]);
    videos.push(v1);
    videos.push(v2);
    videos.push(v3);
    
    let documents:Array<FileFolders>= new Array<FileFolders>();
    let d1:FileFolders=new FileFolders("Resumes","resumes",[new FileFolders("draft1.docx","draft1",null),
                                                         new FileFolders("draft2.docx","draft2",null),
                                                         new FileFolders("finalDraft.docx","finalDraft",null)]);
    let d2:FileFolders=new FileFolders("Office Stuff","officeStuff",[new FileFolders("office_111.jpg","office_111",null),
                                                        new FileFolders("office_313.jpg","office_313",null)]);
    documents.push(d1);
    documents.push(d2);

    let music:Array<FileFolders>= new Array<FileFolders>();
    let recentFolders:Array<FileFolders>= new Array<FileFolders>();
    let downloads:Array<FileFolders>= new Array<FileFolders>();


    
    this.treeData=[
      new FileFolders(this.node,"column",pictures),
      // new FileFolders("Videos","VDS",videos),
      // new FileFolders("Documents","DCMNTS",documents),
      // new FileFolders("Music","MUSC",music),
      // new FileFolders("Recent","RCNT",recentFolders),
      // new FileFolders("Downloads","DWNLDS",downloads),
    ]
      this.demoData=new TreeModel("code",
                                  "name",
                                  "children",
                                  this.treeData,
                                  null, 
                                  false, 
                                  "Sulzure: Tree View",
                                  "demoData_folderStructure",
                                  "fa-folder-o",
                                  "fa-folder-open",
                                  "fa-square-o");
              

  }



}
