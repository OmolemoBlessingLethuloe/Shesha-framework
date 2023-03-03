﻿using Abp.Specifications;
using Shesha.Domain;
using System;
using System.Linq.Expressions;

namespace Shesha.ConfigurationItems
{
    /// <summary>
    /// Specification to find configuration item by name and module
    /// </summary>
    public class ByNameAndModuleSpecification<TItem> : ISpecification<TItem> where TItem : ConfigurationItemBase
    {
        public string Name { get; private set; }
        public string ModuleName { get; private set; }

        public ByNameAndModuleSpecification(string name, string moduleName)
        {
            Name = name;
            ModuleName = moduleName;
        }

        public bool IsSatisfiedBy(TItem obj)
        {
            return string.IsNullOrWhiteSpace(ModuleName)
                ? obj.Configuration.Name == Name && obj.Configuration.Module == null
                : obj.Configuration.Name == Name && obj.Configuration.Module?.Name == ModuleName;
        }

        public Expression<Func<TItem, bool>> ToExpression()
        {
            return string.IsNullOrWhiteSpace(ModuleName)
                ? item => item.Configuration.Name == Name && item.Configuration.Module == null
                : item => item.Configuration.Name == Name && item.Configuration.Module != null && item.Configuration.Module.Name == ModuleName;
        }
    }
}
