import React from 'react';

const CodingEnvironment: React.FC = () => {
    return (
        <div className="flex-1 bg-[#16201d] border border-[#283933] rounded-xl flex flex-col shadow-lg overflow-hidden relative min-h-[500px]">
            {/* Tabs */}
            <div className="flex items-center border-b border-[#283933] bg-[#0f1513]">
                <button className="px-6 py-3 text-sm font-medium text-primary border-b-2 border-primary bg-primary/5">Code Editor</button>
                <button className="px-6 py-3 text-sm font-medium text-[#9cbab0] hover:text-white transition-colors">Upload File</button>
                <button className="px-6 py-3 text-sm font-medium text-[#9cbab0] hover:text-white transition-colors">GitHub Gist</button>
            </div>

            {/* Editor Area */}
            <div className="flex-1 bg-[#0d1210] p-4 font-mono text-sm relative group/editor overflow-auto">
                {/* Line Numbers */}
                <div className="absolute left-0 top-4 bottom-4 w-10 text-right text-[#283933] select-none pr-3 border-r border-[#283933]/30 hidden sm:block leading-6">
                    1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />11<br />12<br />13<br />14<br />15<br />16<br />17<br />18<br />19<br />20
                </div>

                {/* Code Content Mock */}
                <div className="pl-0 sm:pl-12 text-gray-300 leading-6">
                    <span className="text-[#f97583]">import</span> React, {'{'} useState, useMemo {'}'} <span className="text-[#f97583]">from</span> <span className="text-[#9ecbff]">'react'</span>;<br />
                    <span className="text-[#f97583]">import</span> {'{'} FixedSizeList {'}'} <span className="text-[#f97583]">from</span> <span className="text-[#9ecbff]">'react-window'</span>;<br />
                    <br />
                    <span className="text-[#b392f0]">const</span> ProductList = ({'{'} items {'}'}) =&gt; {'{'}<br />
                    &nbsp;&nbsp;<span className="text-[#6a737d]">// Implementing memoization for heavy filter logic</span><br />
                    &nbsp;&nbsp;<span className="text-[#b392f0]">const</span> processedItems = useMemo(() =&gt; {'{'}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#f97583]">return</span> items.filter(i =&gt; i.stock &gt; <span className="text-[#79b8ff]">0</span>);<br />
                    &nbsp;&nbsp;{'}'}, [items]);<br />
                    <br />
                    &nbsp;&nbsp;<span className="text-[#b392f0]">const</span> Row = ({'{'} index, style {'}'}) =&gt; (<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white">&lt;div style=</span>{'{'}style{'}'}<span className="text-white">&gt;</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}processedItems[index].name{'}'}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white">&lt;/div&gt;</span><br />
                    &nbsp;&nbsp;);<br />
                    <br />
                    &nbsp;&nbsp;<span className="text-[#f97583]">return</span> (<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white">&lt;FixedSizeList</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height={'{'}<span className="text-[#79b8ff]">500</span>{'}'}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;itemCount={'{'}processedItems.length{'}'}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;itemSize={'{'}<span className="text-[#79b8ff]">35</span>{'}'}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width={'{'}<span className="text-[#9ecbff]">'100%'</span>{'}'}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white">&gt;</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}Row{'}'}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white">&lt;/FixedSizeList&gt;</span><br />
                    &nbsp;&nbsp;);<br />
                    {'}'};
                </div>

                {/* Cursor */}
                <div className="w-2 h-4 bg-primary absolute top-[300px] left-[60px] animate-pulse"></div>
            </div>

            {/* Footer Action */}
            <div className="p-4 border-t border-[#283933] bg-[#111816] flex justify-between items-center">
                <div className="text-xs text-[#9cbab0] flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-green-500">check_circle</span>
                    Syntax Valid
                </div>
                <button className="bg-primary hover:bg-primary/90 text-black font-bold py-2.5 px-6 rounded-lg shadow-[0_0_10px_rgba(37,244,175,0.2)] hover:shadow-[0_0_20px_rgba(37,244,175,0.4)] transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined text-xl">play_circle</span>
                    Validate Solution
                </button>
            </div>
        </div>
    );
};

export default CodingEnvironment;
