/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {NgModule} from '@angular/core';

import {AlertsListComponent}   from './alerts-list.component';
import {routing} from './alerts-list.routing';
import {SharedModule} from '../../shared/shared.module';
import {AlertService} from '../../service/alert.service';
import {MetronSorterModule} from '../../shared/metron-table/metron-sorter/metron-sorter.module';
import {ListGroupModule} from '../../shared/list-group/list-grup.module';
import {CollapseModule} from '../../shared/collapse/collapse.module';
import {MetronTablePaginationModule} from '../../shared/metron-table/metron-table-pagination/metron-table-pagination.module';
import {ConfigureRowsModule} from '../configure-rows/configure-rows.module';

@NgModule({
    imports: [routing, SharedModule, ConfigureRowsModule, MetronSorterModule, MetronTablePaginationModule,
                ListGroupModule, CollapseModule],
    exports: [],
    declarations: [AlertsListComponent],
    providers: [AlertService],
})
export class AlertsListModule {
}
