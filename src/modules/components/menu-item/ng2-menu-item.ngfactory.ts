/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './ng2-menu-item';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../dropdown/ng2-dropdown';
import * as import10 from './style.css.shim.ngstyle';
export class Wrapper_Ng2MenuItem {
  /*private*/ _eventHandler:Function;
  context:import0.Ng2MenuItem;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.Ng2MenuItem(p0);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_preventClose(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.preventClose = currValue;
      this._expr_0 = currValue;
    }
  }
  check_value(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.value = currValue;
      this._expr_1 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_Ng2MenuItem_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_Ng2MenuItem_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.Ng2MenuItem>;
  _Ng2MenuItem_0_3:Wrapper_Ng2MenuItem;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Ng2MenuItem_Host0,renderType_Ng2MenuItem_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ng2-menu-item',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_Ng2MenuItem0(this.viewUtils,this,0,this._el_0);
    this._Ng2MenuItem_0_3 = new Wrapper_Ng2MenuItem(this.injectorGet(import9.Ng2Dropdown,this.parentIndex));
    this.compView_0.create(this._Ng2MenuItem_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._Ng2MenuItem_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.Ng2MenuItem) && (0 === requestNodeIndex))) { return this._Ng2MenuItem_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Ng2MenuItem_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 0) && (ngContentIndex == 0))) {  }
  }
}
export const Ng2MenuItemNgFactory:import8.ComponentFactory<import0.Ng2MenuItem> = new import8.ComponentFactory<import0.Ng2MenuItem>('ng2-menu-item',View_Ng2MenuItem_Host0,import0.Ng2MenuItem);
const styles_Ng2MenuItem:any[] = [import10.styles];
var renderType_Ng2MenuItem:import4.RenderComponentType = import3.createRenderComponentType('',1,import5.ViewEncapsulation.Emulated,styles_Ng2MenuItem,{});
export class View_Ng2MenuItem0 extends import2.AppView<import0.Ng2MenuItem> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _text_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Ng2MenuItem0,renderType_Ng2MenuItem,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','ng2-menu-item'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this.projectNodes(this._el_0,0);
    this._text_2 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_3 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray4(4,'click',(null as any),'mouseover',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._text_2,
      this._text_3
    ]
    ),[disposable_0]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_4:any = this.context.isSelected;
    if (import3.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementClass(this._el_0,'ng2-menu-item--selected',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this.context.button;
    if (import3.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementAttribute(this._el_0,'role',((currVal_5 == null)? (null as any): currVal_5.toString()));
      this._expr_5 = currVal_5;
    }
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.click()) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'mouseover')) {
      const pd_sub_1:any = ((<any>this.context.select()) !== false);
      result = (pd_sub_1 && result);
    }
    return result;
  }
}