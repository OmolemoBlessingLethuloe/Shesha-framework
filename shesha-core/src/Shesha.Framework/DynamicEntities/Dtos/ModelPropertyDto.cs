﻿using Abp.Application.Services.Dto;
using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using Shesha.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace Shesha.DynamicEntities.Dtos
{
    /// <summary>
    /// Model property DTO
    /// </summary>
    public class ModelPropertyDto : EntityDto<string>
    {
        /// <summary>
        /// Property Name
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Label (display name)
        /// </summary>
        public string Label { get; set; }

        /// <summary>
        /// Description
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Data type
        /// </summary>
        public string DataType { get; set; }

        /// <summary>
        /// Data format
        /// </summary>
        public string DataFormat { get; set; }

        /// <summary>
        /// Entity type. Aplicable for entity references
        /// </summary>
        public string EntityType { get; set; }

        /// <summary>
        /// Reference list name
        /// </summary>
        public string ReferenceListName { get; set; }

        /// <summary>
        /// Reference list namespace
        /// </summary>
        public string ReferenceListNamespace { get; set; }

        /// <summary>
        /// Source type (ApplicationCode = 1, UserDefined = 2)
        /// </summary>
        public MetadataSourceType? Source { get; set; }

        /// <summary>
        /// Default sort order
        /// </summary>
        public virtual int? SortOrder { get; set; }

        /// <summary>
        /// Child properties, applicable for complex data types (e.g. object, array)
        /// </summary>
        public List<ModelPropertyDto> Properties { get; set; } = new List<ModelPropertyDto>();

        /// <summary>
        /// If true, indicates that current property is a framework-related (e.g. <see cref="ISoftDelete.IsDeleted"/>, <see cref="IHasModificationTime.LastModificationTime"/>)
        /// </summary>
        public bool IsFrameworkRelated { get; set; }

        /// <summary>
        /// If true, the property is not returned from Get end-points and is ignored if submitted on Create/Update end-points
        /// The property should also not be listed on the form configurator property list
        /// </summary>
        public virtual bool Suppress { get; set; }

        /// <summary>
        /// Indicates if a property value is required in order to save
        /// </summary>
        public virtual bool Required { get; set; }

        /// <summary>
        /// If true, the property cannot be edited via the dynamically generated create/update end-points:
        /// - property should not be listed on create/update end-points
        /// - should be set to 'True' and not editable for read-only properties of domain classes
        /// </summary>
        public virtual bool ReadOnly { get; set; }

        /// <summary>
        /// Equivalent to Audited attribute on the property
        /// </summary>
        public virtual bool Audited { get; set; }

        /// <summary>
        /// Validation min
        /// </summary>
        public virtual double? Min { get; set; }
        /// <summary>
        /// Validation max
        /// </summary>
        public virtual double? Max { get; set; }

        /// <summary>
        /// Validation min length
        /// </summary>
        public int? MinLength { get; set; }
        /// <summary>
        /// Validation max length
        /// </summary>
        public int? MaxLength { get; set; }

        /// <summary>
        /// Validation RegularExpression 
        /// </summary>
        public virtual string RegExp { get; set; }

        /// <summary>
        /// Validation message
        /// </summary>
        public virtual string ValidationMessage { get; set; }

        public virtual bool SuppressHardcoded { get; set; }

        public virtual bool RequiredHardcoded { get; set; }

        public virtual bool ReadOnlyHardcoded { get; set; }

        public virtual bool AuditedHardcoded { get; set; }

        public virtual bool SizeHardcoded { get; set; }

        public virtual bool RegExpHardcoded { get; set; }

    }
}
